import { Percent, TradeType } from '@uniswap/sdk-core'
import Column from '../../components/Column'
import { RowBetween } from '../../components/Row'
import { InterfaceTrade } from '../../state/routing/types'
import { Separator, ThemedText } from '../../theme/components'
import { NumberType, useFormatter } from '../../utils/formatNumbers'

const ExactInMessage = ({ amount }: { amount: string }) => (
  <>
    If the price moves so that you will receive less than {amount}, your transaction will be reverted. This is the
    minimum amount you are guaranteed to receive.
  </>
)

const ExactOutMessage = ({ amount }: { amount: string }) => (
  <>
    If the price moves so that you will pay more than {amount}, your transaction will be reverted. This is the maximum
    amount you are guaranteed to pay.
  </>
)

function SlippageHeader({ amount, isExactIn }: { amount: string; isExactIn: boolean }) {
  return (
    <RowBetween>
      <ThemedText.Caption color="neutral1">{isExactIn ? <>Receive at least</> : <>Pay at most</>}</ThemedText.Caption>
      <ThemedText.Caption color="neutral1">{amount}</ThemedText.Caption>
    </RowBetween>
  )
}

export function MaxSlippageTooltip({ trade, allowedSlippage }: { trade: InterfaceTrade; allowedSlippage: Percent }) {
  const isExactIn = trade.tradeType === TradeType.EXACT_INPUT
  const amount = isExactIn ? trade.minimumAmountOut(allowedSlippage) : trade.maximumAmountIn(allowedSlippage)

  const formattedAmount = useFormatter().formatCurrencyAmount({ amount, type: NumberType.SwapDetailsAmount })
  const displayAmount = `${formattedAmount} ${
    amount.currency.symbol?.toLocaleUpperCase() === 'ETH' ? 'BB' : amount.currency.symbol?.toLocaleUpperCase()
  }`

  return (
    <Column gap="xs">
      <SlippageHeader amount={displayAmount} isExactIn={isExactIn} />
      <Separator />
      <div>{isExactIn ? <ExactInMessage amount={displayAmount} /> : <ExactOutMessage amount={displayAmount} />} </div>
    </Column>
  )
}
