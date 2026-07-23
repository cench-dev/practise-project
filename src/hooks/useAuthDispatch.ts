import { useDispatch, useSelector } from "react-redux";
import type { AuthDispatch, RootState } from "../Stores/authStore";

export const useAuthDispatch = () => useDispatch<AuthDispatch>()

export const useAuthSelector = () => useSelector((state: RootState) => state.auth)