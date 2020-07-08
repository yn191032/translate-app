import React, { createContext } from 'react';

const SidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
  const [menu, setMenu] = React.useState(false);

  const toggleMenu = (open) => (e) => {
    setMenu(open);
  };

  return (
    <SidebarContext.Provider value={{ menu, toggleMenu }}>
      {children}
    </SidebarContext.Provider>
  );
};

export {
  SidebarContext,
  SidebarContextProvider,
};