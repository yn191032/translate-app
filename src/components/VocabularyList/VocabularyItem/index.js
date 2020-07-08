import React from 'react';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const VocabularyItem = ({ from, to }) => {
  return (
    <div className='vocabulary-item'>
      <div className='vocabulary-item-content'>
        <div className='vocabulary-item-langs'>
          EN
          <ChevronRightIcon className='vocabulary-item-langs-icon'/> 
          pl
        </div>
          <span className='vocabulary-item-from'>{ from }</span>
          <span className='vocabulary-item-to'>{ to }</span>
        <div className='vocabulary-item-date'>20.09.2020</div>
      </div>
      <IconButton className='vocabulary-item-delete'>
        <DeleteForeverIcon fontSize='small' className='vocabulary-item-delete-icon'/>
      </IconButton>
    </div>
  );
};


export default VocabularyItem;