import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';

const PhrasebookListItem = ({ item, onRemove }) => {
  return (
    <div className='vocabulary-item'>
      <div className='vocabulary-item-content'>
        <div className='vocabulary-item-langs'>
          { item.langs.from }
          <ChevronRightIcon className='vocabulary-item-langs-icon'/> 
          { item.langs.to }
        </div>
        <span className='vocabulary-item-from'>{ item.from.word }</span>
        { 
          item.to 
          ? <span className='vocabulary-item-to'>{ item.to.word }</span>
          : null
        }
        { 
          item.date 
          ? <div className='vocabulary-item-date'>{ item.date }</div> 
          : null
        }
      </div>
      {
        onRemove ? 
        <IconButton size='small' className='vocabulary-item-delete'>
          <ClearIcon fontSize='small' className='vocabulary-item-delete-icon'/>
        </IconButton>
        : null
      }
    </div>
  );
};


export default PhrasebookListItem;