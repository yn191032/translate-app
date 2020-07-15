import React, { createContext, useContext } from 'react';

import useLanguage from '../hooks/useLanguage';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const value = useLanguage();
  
  return (
    <LanguageContext.Provider value={value}>
      { children }
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};