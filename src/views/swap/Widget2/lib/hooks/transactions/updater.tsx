import ms from 'ms'
import { useCallback, useEffect } from 'react'
import { useTransactionRemover } from '../../../state/transactions/hooks'
import { TransactionDetails } from '../../../state/transactions/types'

import { NEVER_RELOAD } from '@uniswap/redux-multicall'
import { CanceledError, retry, RetryableError, RetryOptions } from './retry'
import { useActiveWeb3React } from 'hooks'
import useCurrentBlockTimestamp from 'views/swap/Widget2/hooks/useCurrentBlockTimestamp'
import { TransactionReceipt } from '@ethersproject/providers'
import { useBlockNumber } from 'state/application/hooks'

interface Transaction {
  addedTime: number
  receipt?: unknown
  lastCheckedBlockNumber?: number
}

export function shouldCheck(lastBlockNumber: number, tx: Transaction): boolean {
  if (tx.receipt) return false
  if (!tx.lastCheckedBlockNumber) return true
  const blocksSinceCheck = lastBlockNumber - tx.lastCheckedBlockNumber
  if (blocksSinceCheck < 1) return false
  const minutesPending = (new Date().getTime() - tx.addedTime) / ms(`1m`)
  if (minutesPending > 60) {
    // every 10 blocks if pending longer than an hour
    return blocksSinceCheck > 9
  } else if (minutesPending > 5) {
    // every 3 blocks if pending longer than 5 minutes
    return blocksSinceCheck > 2
  } else {
    // otherwise every block
    return true
  }
}

const RETRY_OPTIONS_BY_CHAIN_ID: { [chainId: number]: RetryOptions } = {}
const DEFAULT_RETRY_OPTIONS: RetryOptions = { n: 1, minWait: 0, maxWait: 0 }

interface UpdaterProps {
  pendingTransactions: { [hash: string]: TransactionDetails }
  onCheck: (tx: { chainId: number; hash: string; blockNumber: number }) => void
  onReceipt: (tx: { chainId: number; hash: string; receipt: TransactionReceipt }) => void
}

export default function Updater({ pendingTransactions, onCheck, onReceipt }: UpdaterProps): null {
  const { account, chainId, library: provider } = useActiveWeb3React()
  const hasPending = Object.keys(pendingTransactions).length > 0
  const lastBlockNumber = useBlockNumber()
  const blockTimestamp = useCurrentBlockTimestamp(hasPending ? undefined : NEVER_RELOAD)

  const removeTransaction = useTransactionRemover()

  const getReceipt = useCallback(
    (hash: string) => {
      if (!provider || !chainId) throw new Error('No provider or chainId')
      const retryOptions = RETRY_OPTIONS_BY_CHAIN_ID[chainId] ?? DEFAULT_RETRY_OPTIONS
      return retry(
        () =>
          provider.getTransactionReceipt(hash).then(async receipt => {
            if (receipt === null) {
              if (account) {
                const tx = pendingTransactions[hash]
                // Remove transactions past their deadline or - if there is no deadline - older than 6 hours.
                if (tx.deadline) {
                  // Deadlines are expressed as seconds since epoch, as they are used on-chain.
                  if (blockTimestamp && tx.deadline < blockTimestamp.toNumber()) {
                    removeTransaction(hash)
                  }
                } else if (tx.addedTime + ms(`6h`) < Date.now()) {
                  removeTransaction(hash)
                }
              }
              throw new RetryableError()
            }
            return receipt
          }),
        retryOptions
      )
    },
    [account, blockTimestamp, chainId, pendingTransactions, provider, removeTransaction]
  )

  useEffect(() => {
    if (!chainId || !provider || !lastBlockNumber || !hasPending) return

    const cancels = Object.keys(pendingTransactions)
      .filter(hash => shouldCheck(lastBlockNumber, pendingTransactions[hash]))
      .map(hash => {
        const { promise, cancel } = getReceipt(hash)
        promise
          .then(receipt => {
            onReceipt({ chainId, hash, receipt })
          })
          .catch(error => {
            if (error instanceof CanceledError) return
            onCheck({ chainId, hash, blockNumber: lastBlockNumber })
          })
        return cancel
      })

    return () => {
      cancels.forEach(cancel => cancel())
    }
  }, [chainId, provider, lastBlockNumber, getReceipt, onReceipt, onCheck, pendingTransactions, hasPending])

  return null
}
