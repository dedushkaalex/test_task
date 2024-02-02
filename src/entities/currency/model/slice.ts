import { createSlice } from '@reduxjs/toolkit';

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
    addCurrencyName: (state, action) => {
      state.currencyName = action.payload;
    },
  },
});

export const { addCurrencyName } = currencySlice.actions;
