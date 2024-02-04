import { useAppDispatch, useAppSelector } from 'app/providers/store/store';
import { useGetCurrenciesQuery } from 'entities/currency/api';
import { setCurrencyName } from 'entities/currency/model/slice';
import { useCallback } from 'react';
import { Select } from 'shared/ui/Select';
// import { OptionItem } from 'shared/ui/Select/model/types';

export const SelectCurrency = (): JSX.Element => {
  const currency = useAppSelector((state) => state.currency.currencyName);
  const dispatch = useAppDispatch();
  const { data = [] } = useGetCurrenciesQuery();
  const selectedCurrency = data?.find((item) => item.value === currency);
  const handleCurrencySelect = useCallback((value: string) => {
    // onClick?.(selectedCurrency);
    dispatch(setCurrencyName(value));
  }, []);

  return (
    <Select
      options={data || []}
      selectedItem={!selectedCurrency ? data[0] : selectedCurrency}
      onClick={handleCurrencySelect}
    />
  );
};
