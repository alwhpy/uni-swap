import React from 'react'
import { useTokenContract } from 'hooks/useContract'
import { useSingleCallResult } from 'hooks/multicall'
import { useActiveWeb3React } from 'hooks'
import { useSwitchNetwork } from 'hooks/useSwitchNetwork'
import { useApproveCallback } from 'hooks/useApproveCallback'
import { useCurrencyBalance, useToken } from 'hooks/useToken'
import { CurrencyAmount } from 'constants/token'
import { useAllTransactions } from 'state/transactions/hooks'
import { Button } from '@mui/material'

export default function Wallet() {
  const { chainId } = useActiveWeb3React()
  const tokenContract = useTokenContract('0x85eDB7A0cbAcf5BD641e0FF5D6270bEf9C72Bd6B', false)
  const res = useSingleCallResult(11155111, tokenContract, 'balanceOf', ['0x5718D9C95D15a766E9DdE6579D7B93Eaa88a26b8'])
  console.log('🚀 ~ file: index.tsx:9 ~ Wallet ~ res:', chainId, res.result?.[0].toString())
  const switchNetwork = useSwitchNetwork()
  const token = useToken('0x85eDB7A0cbAcf5BD641e0FF5D6270bEf9C72Bd6B', 11155111)
  console.log('🚀 ~ file: index.tsx:17 ~ Wallet ~ token:', token)
  const [, approve] = useApproveCallback(
    token ? CurrencyAmount.fromAmount(token, '1000000') : undefined,
    '0x85eDB7A0cbAcf5BD641e0FF5D6270bEf9C72Bd6B'
  )
  const bal = useCurrencyBalance('0x5718D9C95D15a766E9DdE6579D7B93Eaa88a26b8', token || undefined, 11155111)
  console.log('🚀 ~ file: index.tsx:24 ~ Wallet ~ bal:', bal?.toSignificant())
  const allTransactions = useAllTransactions()
  console.log('🚀 ~ file: index.tsx:27 ~ Wallet ~ allTransactions:', allTransactions)

  return (
    <div>
      <Button onClick={() => switchNetwork(1)}>switch chain</Button>
      <div>
        <Button onClick={approve}>approve</Button>
      </div>
    </div>
  )
}
