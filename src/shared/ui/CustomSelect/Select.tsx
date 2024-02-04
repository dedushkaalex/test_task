import { useCallback, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './Select.module.css';
import { useOutsideClick } from 'shared/lib/hooks/useOutsideClick';
// import { OptionItem } from '../Select/model/types';

interface SelectProps {
  options: Option[];
  disabled?: boolean;
  onClick: (option: Option) => void;
}

interface Option {
  label: string;
  value: string | number;
}

interface OptionsProps {
  options: Option[];
  onClick: (option: Option) => void;
}

const Options = ({ options, onClick }: OptionsProps): JSX.Element => {
  console.log('@@@@', options);
  return (
    <ul className={styles.option_list}>
      {options.map((option) => {
        return (
          <li className={cn(styles.option)} key={option.value} onClick={() => onClick(option)}>
            {option.value}
          </li>
        );
      })}
    </ul>
  );
};

export const Select = ({ options, disabled, onClick }: SelectProps): JSX.Element => {
  const [controllerValue, setControllerValue] = useState(options[0].value ?? '');
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  useOutsideClick(selectRef, () => setShowOptions(false));

  const handleClick = useCallback(
    (option: Option) => {
      onClick(option);
      setControllerValue(option.value);
    },
    [onClick]
  );

  const SelectIcon = useCallback(
    () => (
      <div aria-hidden="true" role="button" onClick={() => !disabled && setShowOptions(!showOptions)}>
        <div className={styles.arrow_icon} />
      </div>
    ),
    [showOptions, disabled]
  );

  return (
    <div className={styles.select} ref={selectRef}>
      <div className={styles.select__controller}>
        <span className={styles.selected__text}>{controllerValue}</span>
        <SelectIcon />
      </div>
      {showOptions && <Options options={options} onClick={handleClick} />}
    </div>
  );
};
