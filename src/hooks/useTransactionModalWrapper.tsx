import { TransactionResponse } from '@ethersproject/providers'
import { useRequest } from 'ahooks'
import useModal from './useModal'
import TransactionPendingModal from 'components/Modal/TransactionModals/TransactionPendingModal'
import TransactionSubmittedModal from 'components/Modal/TransactionModals/TransactionSubmittedModal'
import TransactionConfirmedModal from 'components/Modal/TransactionModals/TransactionConfirmedModal'
import MessageBox from 'components/Modal/TransactionModals/MessageBox'

export function useTransactionModalWrapper<T extends any[]>(event: (...args: T) => Promise<TransactionResponse>) {
  const { showModal } = useModal()

  const { runAsync } = useRequest(
    async (...args: T) => {
      try {
        showModal(<TransactionPendingModal />)
        const { hash, wait } = await event(...args)
        const ret = new Promise((resolve, reject) => {
          showModal(<TransactionSubmittedModal hash={hash} beforeClose={() => reject()} />)
          wait(1).then(curReceipt => {
            resolve(curReceipt)
          })
        })
        ret
          .then(() => {
            showModal(<TransactionConfirmedModal hash={hash} />)
          })
          .catch()
      } catch (error: any) {
        showModal(
          <MessageBox type="error" header="Transaction Error">
            {error?.reason || error?.error?.message || error?.data?.message || error?.message || error?.toString()}
          </MessageBox>
        )
      }
    },
    {
      manual: true
    }
  )

  return runAsync
}
