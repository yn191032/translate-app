import React from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';

const SearchForm = ({ value, setValue, onSubmit, onFocus, onBlur }) => {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Paper 
      elevation={2} 
      component='form' 
      className='searchbar' 
      onSubmit={onSubmit}
    >
      <InputBase 
        fullWidth 
        placeholder='type something' 
        value={value} 
        onFocus={onFocus}
        onBlur={onBlur}
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
  );
};

export default SearchForm;