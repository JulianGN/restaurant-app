import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Reset } from 'styled-reset';

import styled from "styled-components";

const AppS = styled(App)`
  * {
    box-sizing: border-box;
    color: #fff !important;
  }
` 

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <AppS />
  </React.StrictMode>,
  document.getElementById('root')
)
