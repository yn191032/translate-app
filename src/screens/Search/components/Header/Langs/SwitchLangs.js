import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

const SwitchLangs = ({ onClick }) => {
  return (
    <IconButton
      size='small'
      color='inherit'
      className='lang-switch-btn'
      onClick={onClick}
    >
      <CompareArrowsIcon fontSize='small'/>
    </IconButton>
  );
};

export default SwitchLangs;