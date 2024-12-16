import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isAuth: boolean
}

const initialState: AuthState = {
  isAuth: false,
}

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    loginStore(state) {
      state.isAuth = true
    },
    logoutStore(state) {
      state.isAuth = false
    },
  },
})

export const { loginStore, logoutStore } = authSlice.actions
export const selectAuthState = (state: { auth: AuthState }) => state.auth.isAuth
export default authSlice.reducer
