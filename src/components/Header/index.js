import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';

import TranslateIcon from '@material-ui/icons/Translate';

import MenuButton from './MenuButton';
import Topbar from '../Topbar';

const Header = ({ title = '' }) => {
  return (
    <Topbar>
      <MenuButton />
      <h6 className='topbar-title'>{ title }</h6>
      <IconButton
        edge="end" 
        size='small'
        color="inherit"
        to='/'
        component={Link}
      >
        <TranslateIcon/>
      </IconButton>
    </Topbar>
  );
};

export default Header;