import React, { createContext, useContext } from 'react';

import useSearch from '../hooks/useSearch';

import { useLanguageContext } from './LanguageContext';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { defaults } = useLanguageContext();

  const value = useSearch(defaults);
  
  return (
    <SearchContext.Provider value={value}>
      { children }
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
}