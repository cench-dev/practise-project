import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Reducers/authReducer";
import toastReducer from "../Reducers/toastReducer";

export const authStore = configureStore({
  reducer: {
    auth: authSlice,
    toast: toastReducer
  },
})

export type RootState = ReturnType<typeof authStore.getState>
export type AuthDispatch = typeof authStore.dispatch