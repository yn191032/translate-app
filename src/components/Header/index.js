import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import TranslateIcon from '@material-ui/icons/Translate';

import Languages from './Languages';
import MenuButton from './MenuButton';

const Header = ({ title = '', search = false }) => {

  return (
    <AppBar position="static" className='topbar'>
      <Toolbar variant="dense">
        <MenuButton />
        { 
          search ? <Languages /> : 
          <>
            <h6 className='topbar-title'>{ title }</h6>
            <IconButton
              edge="end" 
              size='small'
              aria-label="account of current user"
              color="inherit"
              to='/'
              component={Link}
            >
              <TranslateIcon/>
            </IconButton>
          </>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;