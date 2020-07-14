import React, { useState } from 'react';
import UserContext from './context';

const UserState = ({ children }) => {
  const [userData, setUserData] = useState({
    langs: ['en', 'pl'],
    quickLangs: ['en', 'pl', 'ru'],
  });

  const getLangs = () => userData.langs;
  
  return (
    <UserContext.Provider value={{ getLangs }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserState;