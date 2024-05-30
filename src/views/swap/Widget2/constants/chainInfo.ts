import { ChainId } from '@uniswap/sdk-core'
import ms from 'ms'
import { darkTheme } from '../theme/colors'

import { SupportedL1ChainId, SupportedL2ChainId } from './chains'

export const AVERAGE_L1_BLOCK_TIME = ms(`12s`)
export const DEFAULT_MS_BEFORE_WARNING = ms(`10m`)

/**
 *
 * @param chainId
 * @returns The approximate whole number of blocks written to the corresponding chainId per Ethereum mainnet epoch.
 */
export function getBlocksPerMainnetEpochForChainId(chainId: number | undefined): number {
  // Average block times were pulled from https://dune.com/jacobdcastro/avg-block-times on 2024-03-14,
  // and corroborated with that chain's documentation/explorer.
  // Blocks per mainnet epoch is computed as `Math.floor(12s / AVG_BLOCK_TIME)` and hard-coded.
  switch (chainId) {
    default:
      return 1
  }
}

export enum NetworkType {
  L1,
  L2
}
interface BaseChainInfo {
  readonly networkType: NetworkType
  readonly blockWaitMsBeforeWarning?: number
  readonly docs: string
  readonly bridge?: string
  readonly explorer: string
  readonly infoLink: string
  readonly label: string
  readonly helpCenterUrl?: string
  readonly nativeCurrency: {
    name: string // e.g. 'Goerli ETH',
    symbol: string // e.g. 'gorETH',
    decimals: number // e.g. 18,
  }
  readonly color?: string
  readonly backgroundColor?: string
}

interface L1ChainInfo extends BaseChainInfo {
  readonly networkType: NetworkType.L1
  readonly defaultListUrl?: string
}

export interface L2ChainInfo extends BaseChainInfo {
  readonly networkType: NetworkType.L2
  readonly bridge: string
  readonly statusPage?: string
  readonly defaultListUrl: string
}

type ChainInfoMap = { readonly [chainId: number]: L1ChainInfo | L2ChainInfo } & {
  readonly [chainId in SupportedL2ChainId]: L2ChainInfo
} & { readonly [chainId in SupportedL1ChainId]: L1ChainInfo }

const CHAIN_INFO: ChainInfoMap = {
  [ChainId.MAINNET]: {
    networkType: NetworkType.L1,
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    color: darkTheme.chain_1
  },
  [ChainId.GOERLI]: {
    networkType: NetworkType.L1,
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://goerli.etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Görli',
    nativeCurrency: { name: 'Görli Ether', symbol: 'görETH', decimals: 18 },
    color: darkTheme.chain_5
  },
  [ChainId.SEPOLIA]: {
    networkType: NetworkType.L1,
    docs: 'https://docs.uniswap.org/',
    explorer: 'https://sepolia.etherscan.io/',
    infoLink: 'https://info.uniswap.org/#/',
    label: 'Sepolia',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'SepoliaETH', decimals: 18 },
    color: darkTheme.chain_5
  }
} as const

// export function getChainInfo(
//   chainId: SupportedL1ChainId,
//   featureFlags?: Record<ChainId | SupportedL1ChainId | SupportedL2ChainId | number, boolean>
// ): L1ChainInfo
// export function getChainInfo(
//   chainId: SupportedL2ChainId,
//   featureFlags?: Record<ChainId | SupportedL1ChainId | SupportedL2ChainId | number, boolean>
// ): L2ChainInfo
// export function getChainInfo(
//   chainId: ChainId,
//   featureFlags?: Record<ChainId | SupportedL1ChainId | SupportedL2ChainId | number, boolean>
// ): L1ChainInfo | L2ChainInfo
// export function getChainInfo(
//   chainId: ChainId | SupportedL1ChainId | SupportedL2ChainId | number | undefined,
//   featureFlags?: Record<ChainId | SupportedL1ChainId | SupportedL2ChainId | number, boolean>
// ): L1ChainInfo | L2ChainInfo | undefined

/**
 * Overloaded method for returning ChainInfo given a chainID
 * Return type varies depending on input type:
 * number | undefined -> returns chaininfo | undefined
 * ChainId -> returns L1ChainInfo | L2ChainInfo
 * SupportedL1ChainId -> returns L1ChainInfo
 * SupportedL2ChainId -> returns L2ChainInfo
 */
export function getChainInfo(
  chainId: any,
  featureFlags?: Record<ChainId | SupportedL1ChainId | SupportedL2ChainId | number, boolean>
): any {
  if (featureFlags && chainId in featureFlags) {
    return featureFlags[chainId] ? CHAIN_INFO[chainId] : undefined
  }
  if (chainId) {
    return CHAIN_INFO[chainId] ?? undefined
  }
  return undefined
}

const MAINNET_INFO = CHAIN_INFO[ChainId.MAINNET]
export function getChainInfoOrDefault(chainId: number | undefined, featureFlags?: Record<number, boolean>) {
  return getChainInfo(chainId, featureFlags) ?? MAINNET_INFO
}
