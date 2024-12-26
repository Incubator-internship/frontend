import { inctagramApi } from '@/app/api/inctagramApi'
import authReducer from '@/app/config/store/authSlice'
import { combineSlices, configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(inctagramApi.middleware),
    reducer: {
      auth: authReducer,
      [inctagramApi.reducerPath]: inctagramApi.reducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
