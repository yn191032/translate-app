import React, { useState } from 'react';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const LangDefault = ({ onSet, value, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (value) => (event) => {
    setAnchorEl(null);
    onSet(value)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton 
        className='lang-switch-lang'
        variant="outlined"
        size='small' 
        color="inherit"
        aria-controls="lang-menu" 
        aria-haspopup="true"
        onClick={handleClickListItem}
      >
        { value }
        <KeyboardArrowDownIcon fontSize='small'/>
      </IconButton>

      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            onClick={handleMenuItemClick(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LangDefault;