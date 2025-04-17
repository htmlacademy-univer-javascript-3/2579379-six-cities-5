import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../types';
const ERROR_TIMEOT = 20000;

type ErrorState = {
  error: string | null;
};

const initialState: ErrorState = {
  error: null,
};

export const errorSlice = createSlice({
  name: 'ERROR',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;

export const errorHandler = (message: string) => (dispatch: AppDispatch) => {
  dispatch(setError(message));

  setTimeout(() => {
    dispatch(clearError());
  }, ERROR_TIMEOT);
};
