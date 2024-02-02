import { useAppSelector } from 'app/providers/store/store';
import styles from './CurrencyText.module.css';
import { Container } from 'shared/ui/Container';
export const CurrencyText = (): JSX.Element => {
  const title = useAppSelector((state) => state.currency.currencyName);
  return (
    <div className={styles.currency__info}>
      <Container className={styles.container}>{title}</Container>
    </div>
  );
};
