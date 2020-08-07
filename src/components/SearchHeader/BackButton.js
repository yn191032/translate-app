import React from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const BackButton = () => {
  return (
    <IconButton
      edge="start"
      size='small'
      color="inherit"
      aria-label="menu"
      onClick={f=>f}
    >
      <ArrowBackIcon/>
    </IconButton>
  );
};

export default BackButton;