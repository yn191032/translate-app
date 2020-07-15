import { useState, useEffect } from 'react';

import api from '../api';
// import useSearchResult from './useSearchResult';

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

  // const { mountResult } = useSearchResult();

  useEffect(() => {
    console.log('suggest', suggestState);
    console.log('search', searchState);
  });

  const mountResult = (result) => result.map(card => ({
    ...card,
    loading: false,
    saved: false,
    save: save(card.hash),
    // remove: remove(card.hash),
  }));

  const save = (hash) => () => {
    setSearchState(prevState => {
      const newCards = prevState.result.map(card => {
        if (card.hash !== hash) {
          return card;
        }
        return { ...card, loading: !card.loading, };
      });

      return { 
        ...prevState, 
        result: newCards,
      }
    });

    // auth
    api.vocabulary.addOne(hash).then(() => {
      setSearchState(prevState => {
        const newCards = prevState.result.map(card => {
          if (card.hash !== hash) {
            return card;
          }
          return { ...card, loading: false, saved: !card.saved, };
        });
  
        return { 
          ...prevState, 
          result: newCards,
        }
      });
    });

  };

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
      setSearchState(prevState => ({ ...prevState, result: mountResult(result) }));
    });
  }

  return {
    result: searchState.result,
    suggestState,
    searchState,
    changeValue,
    searchSubmit,
  }
};

export default useSearch;