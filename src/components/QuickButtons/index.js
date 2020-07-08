import React from 'react';
import { Fab } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';

const QuickButtons = () => {
  return (
    <>
      <Fab size="small" className='quick-btn quick-btn-lang-3'>en</Fab>
      <Fab size="small" className='quick-btn quick-btn-lang-2'>pl</Fab>
      <Fab size="small" className='quick-btn quick-btn-lang-1'>by</Fab>
      <Fab color="secondary" className='quick-btn quick-btn-translate'>
        <TranslateIcon />
      </Fab>
    </>
  );
};

export default QuickButtons;