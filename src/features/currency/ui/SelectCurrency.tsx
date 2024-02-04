import { useAppDispatch } from 'app/providers/store/store';
import { useGetCurrenciesQuery } from 'entities/currency/api';
import { setCurrencyName } from 'entities/currency/model/slice';
import { useCallback, useState } from 'react';
import { Select } from 'shared/ui/CustomSelect/Select';
import type { Option } from 'shared/ui/CustomSelect/model';

export const SelectCurrency = (): JSX.Element => {
  const [curr, setCurr] = useState<Option>();

  const dispatch = useAppDispatch();
  const { data = [] } = useGetCurrenciesQuery();

  const handleCurrencySelect = useCallback((option: Option) => {
    setCurr(option);
    dispatch(setCurrencyName(option.value));
  }, []);

  return <Select options={data || []} onChange={(option) => handleCurrencySelect(option)} value={curr ?? data[0]} />;
};
