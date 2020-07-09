import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

import LangSwitchControl from './LangSwitchControl';

const LangSwitch = (props) => {

  return (
    <div className='lang-switch' {...props}>
      <LangSwitchControl />
      
      <IconButton size='small' color="inherit" className='lang-switch-btn'>
        <CompareArrowsIcon fontSize='small'/>
      </IconButton>

      <LangSwitchControl />
    </div>
  );
};

export default LangSwitch;