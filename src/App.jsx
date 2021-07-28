import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home'
import '@material/react-text-field/dist/text-field.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider> 
    </>
  )
}

export default App
