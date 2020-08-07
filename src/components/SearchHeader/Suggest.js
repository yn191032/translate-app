import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import useSuggests from './hooks/useSuggests';

const Suggest = ({ from, to, phrase, onClick }) => {
  const { suggests } = useSuggests(from, to, phrase);

  console.log('<Suggest />', suggests);

  return suggests ? (
    <List dense={true} className='searchbar-autocomplete'>
      {suggests.map(item =>
        <ListItem key={item} button onClick={onClick(item)}>
          <ListItemText primary={item} />
        </ListItem>
      )}
    </List> 
  ) : null;
};

export default Suggest;