import { AppRouter } from './providers/router';
import { AppStore } from './providers/store';

export const App = () => {
  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  );
};
