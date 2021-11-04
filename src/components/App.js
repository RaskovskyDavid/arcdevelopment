import React from 'react';
import Header from './ui/Header.js';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/Theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Header />
    
    </ThemeProvider>
    
  );
}

export default App;
