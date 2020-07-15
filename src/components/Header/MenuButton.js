import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useSidebarContext } from '../../contexts/SidebarContext';

const MenuButton = () => {
  const { toggleMenu } = useSidebarContext();

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