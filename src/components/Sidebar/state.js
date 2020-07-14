import React, { useState } from 'react';

import SidebarContext from './context';

const SidebarState = ({ children }) => {
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

export default SidebarState;