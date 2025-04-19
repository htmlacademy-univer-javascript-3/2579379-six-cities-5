import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkAuthStatus, login, logout } from '../api-actions';
import { AuthorizationStatus } from '../../consts/consts';
import { User } from '../../types';

export type UserStateType = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
}

const initialState: UserStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

const authSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
