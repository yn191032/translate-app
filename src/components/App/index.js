import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Sidebar from '../Sidebar';

import Home from '../../pages/Home';
import Vocabulary from '../../pages/Vocabulary';
import Signup from '../../pages/Signup';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import BottomNav from '../BottomNav';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/vocabulary' component={Vocabulary}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/profile' component={Profile}/>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
