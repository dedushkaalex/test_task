import { MouseEventHandler } from 'react';
import type { OptionItem } from '../model/types';

import cn from 'classnames';

import styles from './Option.module.css';

interface OptionProps {
  option: OptionItem;
  onClick: (value: OptionItem['value']) => void;
}

export const Option = ({ onClick, option: { title, value } }: OptionProps): JSX.Element => {
  const handleClick =
    (clickedValue: OptionItem['value']): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };
  return (
    <li className={cn(styles.option)} value={value} onClick={handleClick(value)} tabIndex={0}>
      {title}
    </li>
  );
};
