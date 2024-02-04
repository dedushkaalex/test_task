import cn from 'classnames';
import styles from './Select.module.css';
import { useSelect } from './hooks/useSelect';
import Arrow from 'shared/images/arrow.svg';
import { FieldProps, FilterOptionFunc, Option } from './model/types';
export interface SelectProps extends Omit<FieldProps, 'value' | 'onChange'> {
  options: Option[];
  value: Option | null;
  onChange: (option: Option) => void;
  filterOption?: FilterOptionFunc;
  Сomponents?: {
    NoOptionsMessage?: React.ComponentType;
    Option?: React.ComponentType<{ option: Option }>;
    SelectedValue?: React.ComponentType<{ option: Option }>;
  };
}
const defaultFilterOption: FilterOptionFunc = (option, inputValue) =>
  option.label.toLowerCase().includes(inputValue.toLowerCase());

export const Select = ({
  options,
  onChange,
  value,
  filterOption = defaultFilterOption,
  Сomponents,
  disabled,
  loading,
}: SelectProps): JSX.Element => {
  const { refs, functions, state } = useSelect({
    options,
    filterOption,
    value,
    onChange,
  });
  const showOption = !!value;
  const optionItems = state.filteredOptions.map((option) => {
    const isSelected = state.searchSelectedOption.id === option.id;

    return (
      <li
        key={option.id}
        role="option"
        aria-selected={value?.id === option.id}
        aria-hidden
        className={cn(styles.option, {
          [styles.option__active]: isSelected,
        })}
        onClick={() => functions.onOptionClick(option)}
      >
        {Сomponents?.Option ? <Сomponents.Option option={option} /> : option.label}
      </li>
    );
  });

  return (
    <div aria-hidden aria-disabled={disabled} className={styles.select} ref={refs.selectRef}>
      <div
        aria-hidden
        onClick={() => {
          if (disabled || loading) return;
          functions.onSelectClick();
        }}
        className={styles.select__controller}
      >
        <input
          autoComplete="off"
          type="text"
          disabled={disabled}
          className={styles.input}
          ref={refs.inputRef}
          value={state.inputValue}
          onChange={functions.searchInputHandler}
        />
        <div className={styles.select__arrow}>
          <Arrow />
        </div>
      </div>
      {state.showOptions ||
        (showOption && (
          <div className={styles.option_label}>
            {Сomponents?.SelectedValue ? <Сomponents.SelectedValue option={value} /> : value.label}
          </div>
        ))}
      {state.showOptions && (
        <ul className={styles['select-options']}>
          {!state.filteredOptions.length && (
            <div className={styles.no_option}>
              {Сomponents?.NoOptionsMessage ? <Сomponents.NoOptionsMessage /> : 'no option...'}
            </div>
          )}
          {optionItems}
        </ul>
      )}
    </div>
  );
};
