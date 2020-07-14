import React from 'react';

import IconButton from '@material-ui/core/IconButton';

const LangQuick = ({ value, onClick }) => 
  <IconButton color="inherit" className='topbar-lang-btn' onClick={onClick}>
    { value }
  </IconButton>;

export default LangQuick;