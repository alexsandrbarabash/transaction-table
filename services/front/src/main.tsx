import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { ErrorBoundary } from './components/error-boundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
