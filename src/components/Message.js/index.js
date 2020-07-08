import React from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Message = () => {
  return (
    <Snackbar
      open={true}
      message='ERROR: Some action was happened'
      action={
        <>
          <IconButton aria-label="close" color="inherit">
            <CloseIcon />
          </IconButton>
        </>
      }
    />
  );
};

export default Message;