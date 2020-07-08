import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const LangButton = ({ lang }) => {
  const classes = useStyles();

  return (
    <IconButton 
      color="inherit"
      className={classes.button} 
    >
      <Typography variant="inherit" className={classes.typography}>
        { lang }
      </Typography>
    </IconButton>
  );
};

export default LangButton;