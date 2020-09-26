import React from 'react';

import IconButton from '@material-ui/core/IconButton';

const QuickLangButton = ({ value, onClick }) => 
  <IconButton 
    color="inherit" 
    className='topbar-lang-btn' 
    onClick={onClick}
  >
    {value}
  </IconButton>;

export default QuickLangButton;