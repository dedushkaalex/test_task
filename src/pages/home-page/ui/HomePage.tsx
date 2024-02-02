import { CurrencyText } from 'widgets/currency-text/ui/CurrencyText';
import styles from './HomePage.module.css';
export const HomePage = () => {
  return (
    <section className={styles.page}>
      <CurrencyText />
    </section>
  );
};
