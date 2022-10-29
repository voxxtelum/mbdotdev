import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '@components/Home/Home';
import '@assets/styles/index.css';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@components/ErrorBoundary/ErrorFallback';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ErrorBoundary>
);
