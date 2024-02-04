import React from 'react';
import { useOutsideClick } from 'shared/lib/hooks/useOutsideClick';
import type { FilterOptionFunc, Option } from '../model';

interface UseSelectParams {
  options: Option[];
  filterOption: FilterOptionFunc;
  value: Option | null;
  onChange: (option: Option) => void;
}

export const useSelect = ({ options, value, onChange, filterOption }: UseSelectParams) => {
  const [inputValue, setInputValue] = React.useState('');
  const selectRef = React.useRef<HTMLInputElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [showOptions, setShowOptions] = React.useState(false);

  const [searchSelectedOption, setSearchSelectedOption] = React.useState({
    index: options?.findIndex((option) => option.id === value?.id),
    id: value?.id,
  });

  const filteredOptions = React.useMemo(
    () => options?.filter((option) => filterOption(option, inputValue)),
    [options, inputValue]
  );

  React.useEffect(() => {
    if (!filteredOptions.length) return;
    const searchOption = filteredOptions.find((option) => searchSelectedOption.id === option.id);
    if (!searchOption) return setSearchSelectedOption({ index: 0, id: filteredOptions[0].id });

    setSearchSelectedOption({
      id: searchOption.id,
      index: filteredOptions.findIndex((option) => option.id === searchOption.id),
    });
  }, [filteredOptions]);

  const resetInput = () => {
    if (inputRef.current) inputRef.current.blur();
    setInputValue('');
  };

  useOutsideClick(
    selectRef,
    () => {
      setShowOptions(false);
      const selectedOptionIndex = options.findIndex((el) => el.id === value?.id);
      setSearchSelectedOption({ index: selectedOptionIndex, id: value?.id });
      resetInput();
    },
    [value]
  );

  const selectOption = (option: Option) => {
    const originalOptionIndex = options.findIndex((el) => el.id === option.id);
    onChange(option);
    setSearchSelectedOption({ id: option.id, index: originalOptionIndex });
    setShowOptions(false);
    resetInput();
  };

  const onOptionClick = (option: Option) => selectOption(option);

  const onSelectClick = () => {
    if (inputRef.current && !showOptions) {
      setShowOptions(true);
      inputRef.current.focus();
      return;
    }

    resetInput();
    setShowOptions(false);
  };

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(event.target.value);
  };
  return {
    refs: { selectRef, inputRef },
    functions: { onSelectClick, onOptionClick, searchInputHandler },
    state: {
      filteredOptions,
      showOptions,
      searchSelectedOption,
      value,
      inputValue,
    },
  };
};
