import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { load, save } from 'redux-localstorage-simple-next'
import multicall from './multicall'
import application from './application/reducer'
import { updateVersion } from './global/actions'
import transactions from './transactions/reducer'
import pluginTokenListConfig from './pluginTokenListConfig/reducer'
import swap from './widget/swap/reducer'
import swapUser from './widget/swapUser/reducer'
import mint from './widget/mint/reducer'
import burn from './widget/burn/reducer'
import swap2 from 'views/swap/Widget2/state'
import { persistStore } from 'redux-persist'
const PERSISTED_KEYS: string[] = ['transactions']

const reducer = combineReducers({
  [multicall.reducerPath]: multicall.reducer,
  application,
  transactions,
  pluginTokenListConfig,
  swap,
  swapUser,
  mint,
  burn,
  swap2
})

const store = configureStore({
  reducer,
  // middleware: [...getDefaultMiddleware({ thunk: true }), save({ states: PERSISTED_KEYS })],
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: true }).concat(save({ states: PERSISTED_KEYS })),
  preloadedState: load({ states: PERSISTED_KEYS })
})

store.dispatch(updateVersion())

export default store
export const persistor = persistStore(store)
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
