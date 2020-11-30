import React from 'react';
import GlobalStyle from './assets/styles/global';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import AppProvider from './store/index';

function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
