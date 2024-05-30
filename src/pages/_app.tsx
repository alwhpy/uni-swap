import GoogleAnalyticsReporter from 'components/analytics/GoogleAnalyticsReporter'
import type { AppProps } from 'next/app'
import MuiThemeProvider from 'provider/MuiThemeProvider'
import ConnectProvider from 'provider/ConnectProvider'
import StateProvider from 'provider/StateProvider'
import { ModalProvider } from 'provider/ModalProvider'
import ApplicationUpdater from 'state/application/updater'
import TransactionsUpdater from 'state/transactions/updater'
import { MulticallUpdater } from 'state/multicall'
import BigNumber from 'bignumber.js'
import Popups from 'components/essential/Popups'
import 'styles/globals.css'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { projectId, wagmiConfig } from 'provider/ConnectProvider'
import { SupportedChainList } from 'constants/chains'

BigNumber.config({ EXPONENTIAL_AT: [-20, 40], ROUNDING_MODE: BigNumber.ROUND_DOWN })

// Must be introduced using @web3modal/wagmi/react， Cannot use @web3modal/wagmi
// Consistent with defaultWagmiConfig
createWeb3Modal({
  themeVariables: {
    '--w3m-z-index': 10000
  },
  projectId,
  wagmiConfig,
  featuredWalletIds: ['8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4'], // default show wallet type
  chains: SupportedChainList
})

function Updater() {
  return (
    <>
      <ApplicationUpdater />
      <MulticallUpdater />
      <TransactionsUpdater />
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <ConnectProvider>
        <MuiThemeProvider>
          <Updater />
          <Popups />
          <GoogleAnalyticsReporter />
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </MuiThemeProvider>
      </ConnectProvider>
    </StateProvider>
  )
}
