import { useState, useRef } from 'react'
import { useTheme, Box, Typography, styled } from '@mui/material'
import QuestionHelper from 'components/essential/QuestionHelper'

enum SlippageError {
  InvalidInput = 'InvalidInput',
  RiskyLow = 'RiskyLow',
  RiskyHigh = 'RiskyHigh'
}

enum DeadlineError {
  InvalidInput = 'InvalidInput'
}

const FancyButton = styled('button')(({ theme }) => ({
  color: theme.palette.text.primary,
  alignItems: 'center',
  height: '3rem',
  borderRadius: '14px',
  fontSize: '1rem',
  width: 'auto',
  minWidth: '3.5rem',
  border: `1px solid ${theme.palette.text.primary}`,
  outline: 'none',
  padding: '14px',
  background: theme.palette.background.default
}))

const Input = styled('input', {
  shouldForwardProp: prop => prop !== 'color'
})<{ color?: string }>(({ theme, color }) => ({
  color: color === 'red' ? theme.palette.error.main : theme.palette.text.primary,
  background: 'transparent',
  fontSize: '16px',
  width: 'auto',
  outline: 'none',
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    WebkitAppearance: 'none'
  },
  textAlign: 'left'
}))

const OptionCustom = styled(FancyButton, {
  shouldForwardProp: prop => prop !== 'active' && prop !== 'warning'
})<{ active?: boolean; warning?: boolean }>(({ theme, active, warning }) => ({
  position: 'relative',
  flex: 1,
  border: active ? `1px solid ${warning ? theme.palette.error : '#1F9898'}` : '1px solid transparent',
  '&:hover': {
    border: `1px solid #1F9898`
  },
  '& input': {
    width: '100%',
    height: '100%',
    border: '0px',
    borderRadius: '2rem'
  }
}))

const SlippageEmojiContainer = styled('span')(({ theme }) => ({
  color: theme.palette.warning.main,
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

export interface SlippageTabsProps {
  rawSlippage: number
  setRawSlippage: (rawSlippage: number) => void
  deadline: number
  setDeadline: (deadline: number) => void
  onlySlippage?: boolean
}

export default function TransactionSettings({
  rawSlippage,
  setRawSlippage,
  deadline,
  setDeadline,
  onlySlippage
}: SlippageTabsProps) {
  const theme = useTheme()

  const inputRef = useRef<HTMLInputElement>()

  const [slippageInput, setSlippageInput] = useState('')
  const [deadlineInput, setDeadlineInput] = useState('')

  const slippageInputIsValid =
    slippageInput === '' || (rawSlippage / 100).toFixed(2) === Number.parseFloat(slippageInput).toFixed(2)
  const deadlineInputIsValid = deadlineInput === '' || (deadline / 60).toString() === deadlineInput

  let slippageError: SlippageError | undefined
  if (slippageInput !== '' && !slippageInputIsValid) {
    slippageError = SlippageError.InvalidInput
  } else if (slippageInputIsValid && rawSlippage < 50) {
    slippageError = SlippageError.RiskyLow
  } else if (slippageInputIsValid && rawSlippage > 500) {
    slippageError = SlippageError.RiskyHigh
  } else {
    slippageError = undefined
  }

  let deadlineError: DeadlineError | undefined
  if (deadlineInput !== '' && !deadlineInputIsValid) {
    deadlineError = DeadlineError.InvalidInput
  } else {
    deadlineError = undefined
  }

  function parseCustomSlippage(value: string) {
    setSlippageInput(value)

    try {
      const valueAsIntFromRoundedFloat = Number.parseInt((Number.parseFloat(value) * 100).toString())
      if (!Number.isNaN(valueAsIntFromRoundedFloat) && valueAsIntFromRoundedFloat < 5000) {
        setRawSlippage(valueAsIntFromRoundedFloat)
      }
    } catch {}
  }

  function parseCustomDeadline(value: string) {
    setDeadlineInput(value)

    try {
      const valueAsInt: number = Number.parseInt(value) * 60
      if (!Number.isNaN(valueAsInt) && valueAsInt > 0) {
        setDeadline(valueAsInt)
      }
    } catch {}
  }

  return (
    <Box display="grid" gap="24px">
      <Box display="grid" gap="8px">
        <Box display="flex" alignItems="center">
          <Typography fontWeight={400} fontSize={14} color={theme.palette.text.secondary}>
            Slippage tolerance
          </Typography>
          <QuestionHelper text="Your transaction will revert if the price changes unfavorably by more than this percentage." />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <OptionCustom active={![10, 50, 100].includes(rawSlippage)} warning={!slippageInputIsValid} tabIndex={-1}>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              {!!slippageInput &&
              (slippageError === SlippageError.RiskyLow || slippageError === SlippageError.RiskyHigh) ? (
                <SlippageEmojiContainer>
                  <span role="img" aria-label="warning">
                    ⚠️
                  </span>
                </SlippageEmojiContainer>
              ) : null}
              {/* https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451 */}
              <Input
                ref={inputRef as any}
                placeholder={(rawSlippage / 100).toFixed(2)}
                value={slippageInput}
                onBlur={() => {
                  parseCustomSlippage((rawSlippage / 100).toFixed(2))
                }}
                onChange={e => parseCustomSlippage(e.target.value)}
                color={!slippageInputIsValid ? '#E0417F' : ''}
              />
              %
            </Box>
          </OptionCustom>
        </Box>
        {!!slippageError && (
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            style={{
              fontSize: '14px',
              paddingTop: '7px',
              color: slippageError === SlippageError.InvalidInput ? '#E0417F' : theme.palette.warning.main
            }}
          >
            {slippageError === SlippageError.InvalidInput
              ? 'Enter a valid slippage percentage'
              : slippageError === SlippageError.RiskyLow
                ? 'Your transaction may fail'
                : 'Your transaction may be frontrun'}
          </Typography>
        )}
      </Box>

      {!onlySlippage && (
        <Box display="grid" gap="8px">
          <Box display="flex" alignItems="center">
            <Typography fontSize={14} fontWeight={400} color={theme.palette.text.secondary}>
              Transaction deadline
            </Typography>
            <QuestionHelper text="Your transaction will revert if it is pending for more than this long." />
          </Box>
          <Box display="flex" alignItems="center">
            <OptionCustom style={{ width: '10rem', marginRight: '12px' }} tabIndex={-1}>
              <Input
                color={!!deadlineError ? 'red' : undefined}
                onBlur={() => {
                  parseCustomDeadline((deadline / 60).toString())
                }}
                placeholder={(deadline / 60).toString()}
                value={deadlineInput}
                onChange={e => parseCustomDeadline(e.target.value)}
              />
            </OptionCustom>
            <Typography style={{ paddingLeft: '8px' }} fontSize={14}>
              minutes
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  )
}
