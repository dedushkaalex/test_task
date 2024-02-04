/* eslint-disable @typescript-eslint/no-unused-vars */
import { MouseEventHandler, memo, useCallback, useEffect, useRef, useState } from 'react';
import Arrow from './chevron-down.svg';
import cn from 'classnames';

// import { useOutsideClick } from 'shared/lib';

import styles from './Select.module.css';
import { OptionItem } from '../model/types';
import { Option } from './Option';
import { useOutsideClick } from 'shared/lib/hooks/useOutsideClick';

interface SelectProps {
  selectedItem: OptionItem | null;
  options: OptionItem[];
  placeholder?: string;
  onClick?: (selected: OptionItem['value']) => void;
}

interface OptionsProps {
  options: OptionItem[];
  onClick: (value: OptionItem['value']) => void;
}
const Options = memo(function Options({ options, onClick }: OptionsProps) {
  console.log('@@@@', 'RENDER');
  return (
    <ul className={styles['select-options']}>
      {options.map(({ title, value }, index) => (
        <li className={cn(styles.option)} key={index} value={value} onClick={() => onClick(value)} tabIndex={0}>
          {title}
        </li>
      ))}
    </ul>
  );
});

export const Select = ({ options, selectedItem, onClick, placeholder }: SelectProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  useOutsideClick(selectRef, () => setIsOpen(false));

  const handleOptionClick = useCallback(
    (value: OptionItem['value']) => {
      setIsOpen(false);
      onClick?.(value);
    },
    [onClick]
  );

  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const ref = selectRef.current;
    if (!ref) return;

    const handleClick = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setIsOpen((prev) => !prev);
      }
    };

    ref.addEventListener('keydown', handleClick);

    return () => {
      ref.removeEventListener('keydown', handleClick);
    };
  }, []);

  return (
    <div className={styles.select} ref={selectRef} data-is-active={isOpen}>
      <div className={styles.select__controller}>
        <span className={styles.selected__text}>{selectedItem?.title || placeholder}</span>
        <div className={styles.select__arrow} onClick={handlePlaceHolderClick} role="button" tabIndex={0}>
          <Arrow />
        </div>
      </div>
      {isOpen && <Options onClick={handleOptionClick} options={options} />}
    </div>
  );
};
