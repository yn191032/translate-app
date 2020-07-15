import React from 'react';

import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';

import SearchIcon from '@material-ui/icons/Search';

import List from '@material-ui/core/List';

import { useSearchContext } from '../../contexts/SearchContext';

const Suggest = ({ isVisible, suggestions, setValue }) => {
  if (!isVisible || suggestions.length === 0) {
    return null;
  }

  return (
    <List dense={true} className='searchbar-autocomplete'>
      {suggestions.map(s =>
        <ListItem key={s} button onClick={() => setValue(s)}>
          <ListItemText primary={s} />
        </ListItem>
      )}
    </List> 
  );
};

const SearchLoading = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <LinearProgress />
  );
};

const Search = () => {
  const { 
    suggestState,
    searchState,
    changeValue,
    searchSubmit } = useSearchContext();
  
  const submitHandler = (e) => {
    e.preventDefault();
    searchSubmit();
  };

  const handleInputChange = e => changeValue(e.target.value);

  return (
    <>
      <Paper 
        elevation={3} 
        component='form' 
        className='searchbar' 
        onSubmit={submitHandler}
      >
        <Suggest 
          isVisible={suggestState.isVisible} 
          suggestions={suggestState.suggestions} 
          setValue={changeValue} 
        />

        <InputBase 
          fullWidth 
          placeholder='type something' 
          value={searchState.value} 
          onChange={handleInputChange}
        />

        <IconButton 
          color='primary' 
          type='submit' 
          aria-label='search' 
          edge='end'
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <SearchLoading isLoading={searchState.isLoading} />
    </>
  );
};

export default Search;