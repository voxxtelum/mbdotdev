import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@components/Home/Home';
import ColorGenerator from '@components/ColorGen/ColorGenerator';
import '@assets/styles/index.css';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@components/ErrorBoundary/ErrorFallback';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colorgen" element={<ColorGenerator />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);
