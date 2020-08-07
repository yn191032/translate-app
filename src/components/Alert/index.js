import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

import { useAlert } from './context';

const Message = () => {
  const { text, open, hide } = useAlert();

  return (
    <Snackbar
      open={open}
      message={text}
      action={
        <IconButton aria-label="close" color="inherit" onClick={hide}>
          <CloseIcon />
        </IconButton>
      }
    />
  );
};

export default Message;