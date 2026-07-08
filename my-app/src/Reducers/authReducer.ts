import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
  isAuth: boolean
  isAdmin: boolean | null
}

export const initialState: AuthState = {
  isAuth: false,
  isAdmin: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state) => {
      state.isAuth = true
    },
    signOut: (state) => {
      state.isAuth = false
    },
    changeRole: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
  }
}) 

export const { signIn, signOut, changeRole } = authSlice.actions
export default authSlice.reducer