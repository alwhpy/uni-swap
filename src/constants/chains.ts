import { Chain, sepolia } from 'viem/chains'

export type ChainInfo = Chain

// const lootChain: ChainInfo = {
//   id: 5151706,
//   network: 'Loot Chain',
//   name: 'Loot Chain',
//   rpcUrls: {
//     alchemy: {
//       http: ['https://rpc.lootchain.com/http']
//     },
//     infura: {
//       http: ['https://rpc.lootchain.com/http']
//     },
//     default: {
//       http: ['https://rpc.lootchain.com/http']
//     },
//     public: {
//       http: ['https://rpc.lootchain.com/http']
//     }
//   },
//   nativeCurrency: {
//     decimals: 18,
//     name: 'AGLD',
//     symbol: 'AGLD'
//   },
//   blockExplorers: {
//     default: {
//       name: 'loot',
//       url: 'https://explorer.lootchain.com/'
//     }
//   }
// }

const bounceBitTestnet: ChainInfo = {
  id: 6000,
  network: 'BounceBit Testnet',
  name: 'BounceBit Testnet',
  rpcUrls: {
    alchemy: {
      http: ['https://fullnode-testnet.bouncebitapi.com']
    },
    infura: {
      http: ['https://fullnode-testnet.bouncebitapi.com']
    },
    default: {
      http: ['https://fullnode-testnet.bouncebitapi.com']
    },
    public: {
      http: ['https://fullnode-testnet.bouncebitapi.com']
    }
  },
  nativeCurrency: {
    decimals: 18,
    name: 'BB',
    symbol: 'BB'
  },
  blockExplorers: {
    default: {
      name: 'BounceBit Testnet',
      url: 'https://testnet.bbscan.io/'
    }
  }
}

const bounceBitMainnet: ChainInfo = {
  id: 6001,
  network: 'BounceBit Mainnet',
  name: 'BounceBit Mainnet',
  rpcUrls: {
    alchemy: {
      http: ['https://fullnode-mainnet.bouncebitapi.com/']
    },
    infura: {
      http: ['https://fullnode-mainnet.bouncebitapi.com/']
    },
    default: {
      http: ['https://fullnode-mainnet.bouncebitapi.com/']
    },
    public: {
      http: ['https://fullnode-mainnet.bouncebitapi.com/']
    }
  },
  nativeCurrency: {
    decimals: 18,
    name: 'BB',
    symbol: 'BB'
  },
  blockExplorers: {
    default: {
      name: 'BounceBit Mainnet',
      url: 'https://mainnet.bbscan.io/'
    }
  }
}

const bounceBitDevnet: ChainInfo = {
  id: 9000,
  network: 'BounceBit Devnet',
  name: 'BounceBit Devnet',
  rpcUrls: {
    alchemy: {
      http: ['https://fullnode-devnet.bouncebitapi.com/']
    },
    infura: {
      http: ['https://fullnode-devnet.bouncebitapi.com/']
    },
    default: {
      http: ['https://fullnode-devnet.bouncebitapi.com/']
    },
    public: {
      http: ['https://fullnode-devnet.bouncebitapi.com/']
    }
  },
  nativeCurrency: {
    decimals: 18,
    name: 'BB',
    symbol: 'BB'
  },
  blockExplorers: {
    default: {
      name: 'BounceBit Devnet',
      url: 'https://web-bbscan-devnet.vercel.app/'
    }
  }
}

export enum SupportedChainId {
  // MAINNET = 1,
  SEPOLIA = 11155111,
  // LOOT = 5151706,
  TESTNET = 6000,
  BB_MAINNET = 6001,
  BIT_DEVNET = 9000
}

export const CHAINS: { [key in SupportedChainId]: ChainInfo } = {
  // [SupportedChainId.MAINNET]: mainnet,
  [SupportedChainId.SEPOLIA]: sepolia,
  // [SupportedChainId.LOOT]: lootChain,
  [SupportedChainId.TESTNET]: bounceBitTestnet,
  [SupportedChainId.BB_MAINNET]: bounceBitMainnet,
  [SupportedChainId.BIT_DEVNET]: bounceBitDevnet
}

export const NETWORK_CHAIN_ID = Number(process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID) || SupportedChainId.BB_MAINNET

export const SUPPORT_NETWORK_CHAIN_IDS: SupportedChainId[] = process.env.NEXT_PUBLIC_CHAIN_IDS
  ? process.env.NEXT_PUBLIC_CHAIN_IDS.split(',').map(v => Number(v) as SupportedChainId)
  : [SupportedChainId.BB_MAINNET]

export const SupportedChainsInfo: { [x in SupportedChainId]: ChainInfo } = (() => {
  const list: { [x in SupportedChainId]: ChainInfo } = {} as { [x in SupportedChainId]: ChainInfo }
  for (const item of SUPPORT_NETWORK_CHAIN_IDS) {
    const chain = CHAINS[item]
    if (!chain) {
      throw new Error('Unsupported ChainId')
    }
    list[item] = chain
  }
  return list
})()

export const SupportedChainList = SUPPORT_NETWORK_CHAIN_IDS.map(chain => CHAINS[chain]).filter(i => i) as ChainInfo[]
