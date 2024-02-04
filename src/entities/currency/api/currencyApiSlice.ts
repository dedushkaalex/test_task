import { baseApi } from 'shared/api';
import { CurrenciesResponse } from './types';
import { OptionItem } from 'shared/ui/Select/model/types';

const currencyApiSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrencies: build.query<OptionItem[], void>({
      query: () => 'https://api.coinbase.com/v2/currencies',
      transformResponse: (data: CurrenciesResponse) => {
        const arrCurrency = data.data;

        return arrCurrency.map((item) => ({
          title: item.id,
          value: item.name,
          ...item,
        }));
      },
    }),
  }),
});

export const { useGetCurrenciesQuery } = currencyApiSlice;
