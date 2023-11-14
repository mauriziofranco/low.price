import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// ReactDOM.render(<App />, document.getElementById('root'));


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

serviceWorker.unregister();
