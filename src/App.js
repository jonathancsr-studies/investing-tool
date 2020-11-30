import React from 'react';
import GlobalStyle from './assets/styles/global';
import { socket } from './service/web-socket';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  React.useEffect(() => {
    socket.on('connect', client => console.log('conectei', client));
  }, [socket]);

  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
