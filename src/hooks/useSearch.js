import { useState, useEffect } from 'react';

import api from '../api';

const useSearch = ({ from, to }) => {
  const [suggestState, setSuggestState] = useState({
    suggestions: [],
    isVisible: false,
  });

  const [searchState, setSearchState] = useState({
    value: '',
    isLoading: false,
    result: [],
  });

  useEffect(() => {
    console.log('suggest', suggestState);
    console.log('search', searchState);
  });

  const changeSuggest = (value) => {
    if (value.length < 2) {
      return;
    }
    
    setSuggestState(prevState => ({ ...prevState, isVisible: true }));
    api.search.suggest(value, from, to).then(suggestions => {
      setSuggestState(prevState => ({ ...prevState, suggestions }));
    });
  };

  const changeValue = (value) => {
    setSearchState(prevState => ({ ...prevState, value }));
    changeSuggest(value);
  };

  const searchSubmit = () => {
    if (searchState.value === '') {
      return;
    }

    setSearchState(prevState => ({ ...prevState, isLoading: true }));
    setSuggestState(prevState => ({ ...prevState, isVisible: false }));
    
    api.search.getResult().then(result => {
      setSearchState(prevState => ({ ...prevState, isLoading: false }));
      setSearchState(prevState => ({ ...prevState, result }));
    });
  }

  return {
    suggestState,
    searchState,
    changeValue,
    searchSubmit,
  }
};

export default useSearch;