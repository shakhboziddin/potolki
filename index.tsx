import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// We rely on the Tailwind Play CDN in index.html for immediate preview
// but keep this import for the actual Vite build process.
// If your environment has trouble with CSS imports in ESM, you can comment this out.
import './input.css'; 

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);