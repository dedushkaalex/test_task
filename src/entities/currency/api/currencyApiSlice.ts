import { baseApi } from 'shared/api';
import { CurrenciesResponse } from './types';
import type { Option } from 'shared/ui/CustomSelect/model';

const currencyApiSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrencies: build.query<Option[], void>({
      query: () => 'https://api.coinbase.com/v2/currencies',
      transformResponse: (data: CurrenciesResponse) => {
        const arrCurrency = data.data;

        return arrCurrency.map((item) => ({
          label: item.id,
          value: item.name,
          id: item.id,
          ...item,
        }));
      },
    }),
  }),
});

export const { useGetCurrenciesQuery } = currencyApiSlice;
