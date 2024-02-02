import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};
