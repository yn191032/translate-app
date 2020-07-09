import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import * as serviceWorker from './serviceWorker';

import App from './components/App';
import { SidebarContextProvider } from './components/Sidebar/context';

import './styles/index.scss';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#F99E49',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
