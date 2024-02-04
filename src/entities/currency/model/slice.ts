import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CurrencyState {
  currencyName: string;
}

const initialState: CurrencyState = {
  currencyName: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencyName: (state, action: PayloadAction<string>) => {
      state.currencyName = action.payload;
    },
  },
});

export const { setCurrencyName } = currencySlice.actions;
