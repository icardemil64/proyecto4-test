import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import Dashboard from './containers/Dashboard';
import { GlobalStyles } from './styles/global'
import {lightTheme} from './styles/theme'


function App() {


  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Dashboard/>
    </ThemeProvider>
  );
}

export default App;
