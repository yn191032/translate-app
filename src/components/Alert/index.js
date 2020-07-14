import React, { useContext } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import AlertContext from './context';

const Message = () => {
  const { text, open, hide } = useContext(AlertContext);

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