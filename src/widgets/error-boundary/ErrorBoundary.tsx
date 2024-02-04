import React, { PropsWithChildren, useCallback } from 'react';

import styles from './ErrorBoundary.module.css';

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <ErrorBoundaryComponent />;
    }

    return children;
  }
}

function ErrorBoundaryComponent() {
  const reloadPage = useCallback(() => {
    localStorage.clear();
    location.reload();
  }, []);
  return (
    <div className={styles.error}>
      <h1>Something weng wrong...</h1>
      <button onClick={reloadPage}>Reload page</button>
    </div>
  );
}

export default ErrorBoundary;
