import React from 'react';
import { Provider } from 'react-redux';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home'
import '@material/react-text-field/dist/text-field.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import store from './redux/store';

function App() {

  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider> 
      </Provider>
  )
}

export default App
