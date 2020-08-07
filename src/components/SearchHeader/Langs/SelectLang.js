import React, { useState } from 'react';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { LANGS } from '../../../constants';

const SelectLang = ({ value, onChange, options }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (value) => () => {
    setAnchorEl(null);
    onChange(value);
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
        onClick={handleClickListItem}
      >
        {LANGS[value]}
        {options ? <KeyboardArrowDownIcon fontSize='small'/> : null}
      </IconButton>

      {options ? <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={handleMenuItemClick(option)}
          >
            {LANGS[option]}
          </MenuItem>
        ))}
      </Menu> : null}
    </>
  );
};

export default SelectLang;