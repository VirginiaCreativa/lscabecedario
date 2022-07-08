import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyled from './styles/GlobalStyled';

import 'bootstrap/scss/bootstrap.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
);
