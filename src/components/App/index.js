import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Sidebar from '../Sidebar';
import BottomNav from '../BottomNav';
import Alert from '../Alert';

import Home from '../../pages/Home';
import Vocabulary from '../../pages/Vocabulary';
import Signup from '../../pages/Signup';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';

import { SidebarProvider } from '../../contexts/SidebarContext';

const App = () => {
  return (
    <SidebarProvider>
      <Alert/>
      <BrowserRouter>
        <Sidebar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/vocabulary' component={Vocabulary}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/profile' component={Profile}/>
        <BottomNav/>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
