import React from 'react';

import IconButton from '@material-ui/core/IconButton';

const LangButton = ({ lang }) => 
  <IconButton color="inherit" className='topbar-lang-btn'>
    { lang }
  </IconButton>;

export default LangButton;