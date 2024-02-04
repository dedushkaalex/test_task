import ReactDOM from 'react-dom/client';

import { App } from './app';
import 'app/styles/global.css';
import ErrorBoundary from 'widgets/error-boundary/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
