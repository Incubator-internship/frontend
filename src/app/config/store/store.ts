import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { inctagramApi } from '@/app/api/inctagramApi'
import authReducer from '@/app/config/store/authSlice'
import postReducer from '@/features/addPost/model/postSlice'
import { combineSlices, configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(inctagramApi.middleware),
    reducer: {
      auth: authReducer,
      [inctagramApi.reducerPath]: inctagramApi.reducer,
      post: postReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
