import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import '@esri/calcite-components/dist/components/calcite-alert';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/components/calcite-notice';
import '@esri/calcite-components/dist/components/calcite-scrim';
import '@esri/calcite-components/dist/components/calcite-modal';

// Local assets
setAssetPath(window.location.href);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
