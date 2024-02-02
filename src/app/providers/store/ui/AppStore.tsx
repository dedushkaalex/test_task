import { Provider } from 'react-redux';
import { store } from '../store';

interface AppStoreProps {
  children: React.ReactNode;
}

export const AppStore = ({ children }: AppStoreProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};
