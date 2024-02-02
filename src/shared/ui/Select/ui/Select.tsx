/* eslint-disable @typescript-eslint/no-unused-vars */
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import Arrow from './chevron-down.svg';
import cn from 'classnames';

// import { useOutsideClick } from 'shared/lib';

import styles from './Select.module.css';
import { OptionItem } from '../model/types';
import { Option } from './Option';

interface SelectProps {
  selected: OptionItem | null;
  options: OptionItem[];
  placeholder?: string;
  onClick?: (selected: OptionItem['value']) => void;
  onClose?: () => void;
}

export const Select = ({ options, selected, onClick, onClose, placeholder }: SelectProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { target } = e;
      if (target instanceof Node && !ref.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  const handleOptionClick = (value: OptionItem['value']) => {
    setIsOpen(false);
    onClick?.(value);
  };

  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.select} ref={ref}>
      <div className={styles.select__controller}>
        <span className={styles.selected__text}>{selected?.title || placeholder}</span>
        <div className={styles.select__arrow} onClick={handlePlaceHolderClick} role="button" tabIndex={0}>
          <Arrow />
        </div>
      </div>
      {isOpen && (
        <ul className={styles['select-options']}>
          {options.map((option) => (
            <Option key={option.value} option={option} onClick={handleOptionClick} />
          ))}
        </ul>
      )}
    </div>
  );
};
