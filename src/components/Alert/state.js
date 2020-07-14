import React, { useState } from 'react';
import AlertContext from './context';

const AlertState = ({ children }) => {
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

export default AlertState;