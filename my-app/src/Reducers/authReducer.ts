import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface User {
  id: number;
  username: string;
}


interface AuthState {
  isAuth: boolean;
  isAdmin: boolean | null;
  user: User | null;
}

const savedUser = localStorage.getItem('user');


export const initialState: AuthState = {
  isAuth: !!savedUser,
  isAdmin: null,
  user: savedUser ? JSON.parse(savedUser) : null
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action : PayloadAction<User>) => {
      state.isAuth = true;
      state.user = action.payload;
    },

    setUser: (
      state,
      action: PayloadAction<User>
    ) => {
      state.user = action.payload;
      state.isAuth = true;
    },

    signOut: (state) => {
      state.isAuth = false;
      state.user = null;
    },

    changeRole: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isAdmin = action.payload;
    },
  }
});


export const {
  signIn,
  setUser,
  signOut,
  changeRole
} = authSlice.actions;


export default authSlice.reducer;