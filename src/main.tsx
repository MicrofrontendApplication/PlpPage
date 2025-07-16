// plp/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

if (import.meta.env.DEV && document.getElementById('root')) {
  // Only mount if running standalone (not federated)
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
