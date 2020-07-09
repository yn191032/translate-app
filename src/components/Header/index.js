import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import TranslateIcon from '@material-ui/icons/Translate';

import { SidebarContext } from '../Sidebar/context';
import LangSwitch from './LangSwitch';
import LangButton from './LangButton';

const Header = ({ title = '', search = false }) => {
  const { toggleMenu } = useContext(SidebarContext);

  return (
    <AppBar position="static" className='topbar'>
      <Toolbar variant="dense">
        <IconButton 
        edge="start" 
        size='small'
        color="inherit" 
        aria-label="menu" 
        onClick={toggleMenu(true)}
        >
          <MenuIcon/>
        </IconButton>

        { 
          search ? <>
            <LangSwitch />
            <LangButton lang='by'/>
            <LangButton lang='pl'/>
            <LangButton lang='en'/>
          </> : <>
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