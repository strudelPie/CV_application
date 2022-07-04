import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './components/styling/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Theme } from './components/styling/Theme.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


