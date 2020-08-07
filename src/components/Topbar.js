import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Topbar = ({ children }) => {
  return (
    <AppBar position="static" className='topbar'>
      <Toolbar variant="dense">
        {children}
      </Toolbar>
    </AppBar>
  );
}; 

export default Topbar;