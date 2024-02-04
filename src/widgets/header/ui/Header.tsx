import { Container } from 'shared/ui/Container';
import styles from './Header.module.css';

import { SelectCurrency } from 'features/currency';

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.header__row}>
          <div className={styles['header__row--left']}>
            <div className={styles.header__row__box}>
              <h1 className={styles.header__logo}>
                <span className={styles['header__logo--big']}>cat</span>
                <span className={styles['header__logo--small']}>currencies academic terms</span>
              </h1>
              <SelectCurrency />
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
