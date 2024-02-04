import { Outlet } from 'react-router-dom';

import styles from './RootLayout.module.css';
import { Header } from 'widgets/header';

export const RootLayout = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
