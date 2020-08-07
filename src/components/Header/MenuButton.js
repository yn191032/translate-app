import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useSidebar } from '../Sidebar/context';

const MenuButton = () => {
  const { toggleMenu } = useSidebar();

  return (
    <IconButton
      edge="start"
      size='small'
      color="inherit"
      aria-label="menu"
      onClick={toggleMenu(true)}
    >
      <MenuIcon/>
    </IconButton>
  );
};

export default MenuButton;