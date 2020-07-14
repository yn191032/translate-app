import React, { createContext, useContext } from 'react';

import useSearch from '../hooks/useSearch';

import { useLanguageContext } from './LanguageContext';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { defaults } = useLanguageContext();

  const search = useSearch(defaults);
  
  return (
    <SearchContext.Provider value={{ ...search }}>
      { children }
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
}