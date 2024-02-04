import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_TAGS } from './tags';

const { CURRENCIES } = API_TAGS;

export const baseApi = createApi({
  tagTypes: [CURRENCIES],
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
});
