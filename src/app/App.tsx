import { AppRouter } from './providers/router';
import { AppStore } from './providers/store';

export const App = (): JSX.Element => {
  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  );
};
