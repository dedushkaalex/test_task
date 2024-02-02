import { Container } from 'shared/ui/Container';
import styles from './Header.module.css';
import { Select } from 'shared/ui/Select';
import { useState } from 'react';

const opt = [
  { title: 'янв', value: '01' },
  { title: 'фев', value: '02' },
  { title: 'мар', value: '03' },
  { title: 'апр', value: '04' },
  { title: 'май', value: '05' },
  { title: 'июн', value: '06' },
  { title: 'июл', value: '07' },
  { title: 'авг', value: '08' },
  { title: 'сен', value: '09' },
  { title: 'окт', value: '10' },
  { title: 'ноя', value: '11' },
  { title: 'дек', value: '12' },
];
export const Header = (): JSX.Element => {
  const [month, setMonthValue] = useState('');
  const handleMonthSelect = (value: string) => {
    setMonthValue(value);
  };

  const selectedMonth = opt.find((item) => item.value === month);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__row}>
          <div className={styles['header__row--left']}>
            <div className={styles.header__row__box}>
              <h1 className={styles.header__logo}>
                <span className={styles['header__logo--big']}>cat</span>
                <span className={styles['header__logo--small']}>currencies academic terms</span>
              </h1>
              <Select
                options={opt}
                selected={selectedMonth || null}
                onClick={handleMonthSelect}
                placeholder="Выберите месяц"
              />
            </div>
          </div>
          <div className={styles['header__row--right']}>
            <img src="/kitten.png" width="225px" />
          </div>
        </div>
      </Container>
    </header>
  );
};
