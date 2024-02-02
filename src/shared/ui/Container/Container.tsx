import styles from './Container.module.css';
import cn from 'classnames';
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps): JSX.Element => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
