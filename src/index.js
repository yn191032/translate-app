import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Theme from './components/App/theme';

import SidebarState from './components/Sidebar/state';
import AlertState from './components/Alert/state';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <AlertState>
        <SidebarState>
          <App />
        </SidebarState>
      </AlertState>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
