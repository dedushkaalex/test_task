import { useAppDispatch, useAppSelector } from 'app/providers/store/store';
import { useGetCurrenciesQuery } from 'entities/currency/api';
import { addCurrencyName } from 'entities/currency/model/slice';
import { Select } from 'shared/ui/Select';
import { OptionItem } from 'shared/ui/Select/model/types';

interface SelectCurrencyProps {
  onClick?: (value: OptionItem) => void;
}

export const SelectCurrency = ({ onClick }: SelectCurrencyProps): JSX.Element => {
  const currency = useAppSelector((state) => state.currency.currencyName);
  const dispatch = useAppDispatch();
  const { data = [] } = useGetCurrenciesQuery();
  const selectedCurrency = data?.find((item) => item.value === currency);

  const handleCurrencySelect = (value: string) => {
    onClick?.(selectedCurrency);
    dispatch(addCurrencyName(value));
  };

  return (
    <Select
      options={data || []}
      selected={!selectedCurrency ? data[0] : selectedCurrency}
      onClick={handleCurrencySelect}
    />
  );
};
