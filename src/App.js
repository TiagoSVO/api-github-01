import React from 'react';

import Routes from './routes';

import GlobalStyle from './styles/global';
import Theme from './styles/Theme';

const App = () => {
  return (
    <Theme>
      <Routes />
      <GlobalStyle />
    </Theme>
  );
}

export default App;
