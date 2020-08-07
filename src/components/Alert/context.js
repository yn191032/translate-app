import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('Alert text');

  const show = (text) => { 
    setText(text);
    setOpen(true);
  };

  const hide = () => setOpen(false);

  return (
    <AlertContext.Provider value={{ show, hide, text, open }}>
      { children }
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};