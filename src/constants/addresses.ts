import { SupportedChainId } from './chains'
// import { constructSameAddressMap } from 'utils/constructSameAddressMap'

type AddressMap = { [chainId: number]: string }

export const MULTICALL_ADDRESS: AddressMap = {
  // ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984'),
  // [SupportedChainId.SEPOLIA]: '0x763892796cbB8BF635BbB1143bdF9CF4A6DA6ce8',
  [SupportedChainId.BIT_DEVNET]: '0x4e63165BC93BA8D265de0fa27691C14b9433b5f3',
  [SupportedChainId.TESTNET]: '0x17F89F610400121c7dFD8e9C9D038923dCfAF060',
  [SupportedChainId.BB_MAINNET]: '0x51aF7e696F8b91dF9393295918662b6dbF494818'
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.TESTNET]: '',
  [SupportedChainId.BB_MAINNET]: '',
  [SupportedChainId.BIT_DEVNET]: ''
  // [SupportedChainId.SEPOLIA]: ''
}
