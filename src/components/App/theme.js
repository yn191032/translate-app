import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#F99E49',
    },
  },
});

const Theme = ({ children }) => 
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>

export default Theme;
