import { InputHTMLAttributes, useCallback, ChangeEvent } from 'react'
import { Box, Button } from '@mui/material'
import Input, { InputProps } from './index'
import { escapeRegExp } from 'utils'
import InputLabel from './InputLabel'

// const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
const inputRegex = RegExp(`^\\d*(?:\\\\[.]\\d{0,18})?$`) // match escaped "." characters via in a non-capturing group

const enforcer = (nextUserInput: string, integer?: boolean) => {
  if (integer && nextUserInput !== '') {
    return parseInt(nextUserInput).toString()
  }
  const fixed = nextUserInput.replace(/,/g, '.')
  if (fixed === '' || inputRegex.test(escapeRegExp(fixed))) {
    return fixed
  }
  return null
}

export default function NumericalInput({
  placeholder,
  onChange,
  maxWidth,
  onMax,
  balance,
  label,
  unit,
  endAdornment,
  integer,
  ...props
}: InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    onMax?: () => void
    balance?: string
    unit?: string
    endAdornment?: JSX.Element
    onDeposit?: () => void
    subStr?: string
    integer?: boolean
  }) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      // replace commas with periods
      const formatted = enforcer(event.target.value, integer)
      if (formatted === null) {
        return
      }
      event.target.value = formatted
      onChange && onChange(event)
    },
    [integer, onChange]
  )

  return (
    <Box sx={{ position: 'relative', maxWidth: maxWidth ?? 'unset', width: '100%' }}>
      {(label || balance) && (
        <Box display="flex" justifyContent="space-between">
          <InputLabel>{label}</InputLabel>
          <Box display="flex" alignItems="baseline">
            {!!balance && (
              <InputLabel style={{ fontSize: '12px' }}>
                Available: {balance} {unit ?? 'MATTER'}
              </InputLabel>
            )}
          </Box>
        </Box>
      )}
      <Input
        {...props} // universal input options
        maxWidth={maxWidth}
        onChange={handleChange}
        inputMode="decimal"
        title="Token Amount"
        autoComplete="off"
        autoCorrect="off"
        // text-specific options
        type="text"
        pattern="^[0-9]*[.,]?[0-9]*$"
        placeholder={placeholder || '0.0'}
        minLength={1}
        maxLength={79}
        spellCheck="false"
        endAdornment={
          onMax && (
            <Box gap="20px" display="flex" alignItems="center" paddingLeft="10px" paddingBottom="2px">
              {endAdornment ? endAdornment : unit && <span>{unit ?? 'MATTER'}</span>}
              <Button
                color="secondary"
                disabled={props.disabled === true ? true : false}
                onClick={onMax}
                style={{
                  width: '60px',
                  height: '32px'
                }}
              >
                MAX
              </Button>
            </Box>
          )
        }
      />
    </Box>
  )
}
