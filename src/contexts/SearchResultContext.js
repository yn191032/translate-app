import React, { createContext, useContext } from 'react';
import { useSearchContext } from './SearchContext';
import useSearchResult from '../hooks/useSearchResult';

const SearchResultContext = createContext();

export const SearchResultProvider = ({ children }) => {
  const { searchState } = useSearchContext();

  const value = useSearchResult(searchState.result);
  
  return (
    <SearchResultContext.Provider value={value}>
      { children }
    </SearchResultContext.Provider>
  );
};

export const useSearchResultContext = () => {
  return useContext(SearchResultContext);
};