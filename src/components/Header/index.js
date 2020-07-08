import React, { useContext } from 'react';

import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { SidebarContext } from '../Sidebar/context';

import useStyles from './styles';
import TranslateIcon from '@material-ui/icons/Translate';
import LangSwitch from '../Search/LangSwitch';
import { Link } from 'react-router-dom';

const Header = ({ title = '', search = false }) => {
  const classes = useStyles();
  const { toggleMenu } = useContext(SidebarContext);

  return (
    <AppBar position="static">
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
          search 
          ? <LangSwitch />
          : <Typography variant="h6" className={classes.title}>{ title }</Typography>
        }
        
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;