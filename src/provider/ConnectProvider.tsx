import React from 'react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { CHAINS, NETWORK_CHAIN_ID, SUPPORT_NETWORK_CHAIN_IDS, SupportedChainList } from 'constants/chains'
import { defaultWagmiConfig } from '@web3modal/wagmi/react'

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)

export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ''
const { chains, publicClient, webSocketPublicClient } = configureChains(
  SUPPORT_NETWORK_CHAIN_IDS.map(item => CHAINS[Number(item) as keyof typeof CHAINS]),
  [
    chain => {
      if (chain.id === NETWORK_CHAIN_ID) {
        return {
          chain: SupportedChainList[0],
          rpcUrls: {
            http: SupportedChainList[0].rpcUrls.default.http
          }
        }
      }
      return null
    },
    alchemyProvider({ apiKey: '74_McmNwAy18tBibLLM2aFmRdiihOcwa' })
    // infuraProvider({ apiKey: '74_McmNwAy18tBibLLM2aFmRdiihOcwa' })
  ]
)
// set web3modal config, use its connectors
// Must be introduced using @web3modal/wagmi/react， Cannot use @web3modal/wagmi
const web3ModalConfig = defaultWagmiConfig({ chains, projectId })

// Set up client
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [...web3ModalConfig.connectors],
  publicClient,
  webSocketPublicClient
})

export default function ConnectProvider({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
