import type { OptionItem } from '../model/types';

import cn from 'classnames';

import styles from './Option.module.css';
import { useRef, useEffect } from 'react';

interface OptionProps {
  option: OptionItem;
  onClick: (value: OptionItem['value']) => void;
}

export const Option = ({ onClick, option: { title, value } }: OptionProps): JSX.Element => {
  const optionRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;

    const handleEnterPress = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value);
      }
    };

    option.addEventListener('keydown', handleEnterPress);

    return () => {
      option.removeEventListener('keydown', handleEnterPress);
    };
  }, [value, onClick]);

  return (
    <li className={cn(styles.option)} ref={optionRef} value={value} onClick={() => onClick(value)} tabIndex={0}>
      {title}
    </li>
  );
};
