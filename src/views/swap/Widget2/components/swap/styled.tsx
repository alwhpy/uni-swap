import { transparentize } from 'polished'
import { ReactNode } from 'react'
import { AlertTriangle } from 'react-feather'
import styled, { css } from 'styled-components'
import { Z_INDEX } from '../../theme/zIndex'
import { AutoColumn } from '../Column'
import { Button } from '@mui/material'

export const PageWrapper = styled.div`
  padding: 30px 8px 0px;
  max-width: 480px;
  width: 100%;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    padding-top: 48px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`

// Mostly copied from `AppBody` but it was getting too hard to maintain backwards compatibility.
export const SwapWrapperOuter = styled.main<{ $isDark?: boolean }>`
  position: relative;
  z-index: ${Z_INDEX.default};
  transition: transform 250ms ease;
  border-radius: 24px;
`

export const SwapWrapper = (props: React.ComponentProps<typeof SwapWrapperOuter>) => {
  return (
    <SwapWrapperOuter {...props}>
      <SwapWrapperInner>{props.children}</SwapWrapperInner>
    </SwapWrapperOuter>
  )
}

const SwapWrapperInner = styled.div`
  border-radius: 24px;
  z-index: -1;
`

export const ArrowWrapper = styled.div<{ $clickable: boolean }>`
  border-radius: 12px;
  height: 40px;
  width: 40px;
  position: relative;
  margin-bottom: -18px;
  margin-left: auto;
  margin-right: auto;

  z-index: 2;
  ${({ $clickable }) =>
    $clickable
      ? css`
          :hover {
            cursor: pointer;
            svg path {
              stroke: #cccccc;
            }
          }
        `
      : null}
`

// styles
export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`

const SwapCallbackErrorInner = styled.div`
  background-color: ${({ theme }) => transparentize(0.9, theme.critical)};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  width: 100%;
  padding: 3rem 1.25rem 1rem 1rem;
  margin-top: -2rem;
  color: ${({ theme }) => theme.critical};
  z-index: -1;
  p {
    padding: 0;
    margin: 0;
    font-weight: 535;
  }
`

const SwapCallbackErrorInnerAlertTriangle = styled.div`
  background-color: ${({ theme }) => transparentize(0.9, theme.critical)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 12px;
  min-width: 48px;
  height: 48px;
`

export function SwapCallbackError({ error }: { error: ReactNode }) {
  return (
    <SwapCallbackErrorInner>
      <SwapCallbackErrorInnerAlertTriangle>
        <AlertTriangle size={24} />
      </SwapCallbackErrorInnerAlertTriangle>
      <p style={{ wordBreak: 'break-word' }}>{error}</p>
    </SwapCallbackErrorInner>
  )
}

export const SwapShowAcceptChanges = styled(AutoColumn)`
  background-color: ${({ theme }) => transparentize(0.95, theme.accent1)};
  color: ${({ theme }) => theme.accent1};
  padding: 12px;
  border-radius: 12px;
`

export const SwapSection = styled.div`
  border-radius: 16px;
  color: ${({ theme }) => theme.neutral2};
  font-size: 14px;
  font-weight: 500;
  height: 120px;
  line-height: 20px;
  padding: 16px;
  position: relative;
  &:before {
    box-sizing: border-box;
    background-size: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
  }
  &:hover:before {
    border-color: ${({ theme }) => theme.deprecated_stateOverlayHover};
  }
  &:focus-within:before {
    border-color: ${({ theme }) => theme.deprecated_stateOverlayPressed};
  }
`

export const OutputSwapSection = styled(SwapSection)``

export const ArrowContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const SwapHeaderTabButton = styled(Button)<{ $isActive: boolean }>`
  color: ${({ theme, $isActive }) => ($isActive ? theme.neutral1 : theme.neutral2)};
  background-color: ${({ $isActive }) => $isActive && '#1b1b1b'};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 16px;
  gap: 4px;
  font-weight: 485;
  &:focus {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`
