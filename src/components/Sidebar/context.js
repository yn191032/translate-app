import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = (open) => (e) => {
    setMenu(open);
  };

  return (
    <SidebarContext.Provider value={{ menu, toggleMenu }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};