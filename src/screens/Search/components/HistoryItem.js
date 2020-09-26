import React from 'react';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const HistoryListItem = ({ item }) => {
  return (
    <div className='vocabulary-item'>
      <div className='vocabulary-item-content'>
        <div className='vocabulary-item-langs'>
          {item.langs.from}
          <ChevronRightIcon className='vocabulary-item-langs-icon'/> 
          {item.langs.to}
        </div>
        <span className='vocabulary-item-from'>{item.phrase}</span>
        <div className='vocabulary-item-date'>{item.date}</div>
      </div>
    </div>
  );
};

export default HistoryListItem;