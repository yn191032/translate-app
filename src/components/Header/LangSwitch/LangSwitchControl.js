import React, { useState } from 'react';

import { IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const options = [
  'en',
  'pl',
  'ru',
  'by',
];

const LangSwitchControl = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton 
        variant="outlined"
        size='small' 
        color="inherit"
        aria-controls="lang-menu" 
        aria-haspopup="true"
        onClick={handleClickListItem}
        className='lang-switch-lang'
      >
        <span>{ options[selectedIndex] }</span>
        <KeyboardArrowDownIcon fontSize='small'/>
      </IconButton>

      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LangSwitchControl;