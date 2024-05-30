import { PaletteMode } from '@mui/material'
import { SupportedChainId } from './chains'
import { WETH9 } from '@uniswap/sdk-core'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const DEFAULT_THEME: PaletteMode = 'dark'

const _WBB: {
  [chainId in SupportedChainId]: {
    name: string
    address: string
    symbol: string
    decimals: number
    chainId: number
  }
} = {
  [SupportedChainId.SEPOLIA]: {
    name: 'Wrapped BounceBit',
    address: '',
    symbol: 'WETH',
    decimals: 18,
    chainId: 11155111
  },
  [SupportedChainId.BIT_DEVNET]: {
    name: 'Wrapped BounceBit',
    address: '0x1c895F3586bB25bEa02FC0A06fd21b69dD5C3dAB',
    symbol: 'WBB',
    decimals: 18,
    chainId: 9000
  },
  [SupportedChainId.TESTNET]: {
    name: 'Wrapped BounceBit',
    address: WETH9[SupportedChainId.TESTNET].address,
    symbol: 'WBB',
    decimals: 18,
    chainId: 6000
  },
  [SupportedChainId.BB_MAINNET]: {
    name: 'Wrapped BounceBit',
    address: WETH9[SupportedChainId.BB_MAINNET].address,
    symbol: 'WBB',
    decimals: 18,
    chainId: 6001
  }
  // [SupportedChainId.MAINNET]: {
  //   name: '',
  //   address: '',
  //   symbol: '',
  //   decimals: 0,
  //   chainId: 0
  // },
  // [SupportedChainId.LOOT]: {
  //   name: '',
  //   address: '',
  //   symbol: '',
  //   decimals: 0,
  //   chainId: 0
  // }
}
export const NETWORK_CHAIN_ID: SupportedChainId =
  Number(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID) || SupportedChainId.BB_MAINNET
export const WBB = _WBB[NETWORK_CHAIN_ID]
export const DEFAULT_TOKEN_LIST = {
  tokens: [
    {
      name: 'Wrapped Ether',
      address: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9',
      symbol: 'WETH',
      decimals: 18,
      chainId: 11155111,
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc778417E063141139Fce010982780140Aa0cD5Ab/logo.png'
    },
    {
      name: 'Test Token',
      symbol: 'TEST',
      decimals: 18,
      chainId: 11155111,
      address: '0x4aF535fD65976F7D0C8EeEd3501C026895cDe5B2',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc778417E063141139Fce010982780140Aa0cD5Ab/logo.png'
    },
    WBB,
    {
      name: 'BTCT',
      address: '0x8cd91AAEC8CE5945987E96a13837400174e9c683',
      symbol: 'BTCB',
      decimals: 18,
      chainId: 9000
    }
  ]
}
