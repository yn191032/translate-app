import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from '../Sidebar';
import BottomNav from '../BottomNav';
import Alert from '../Alert';

import { Search, History } from '../../screens/Search';
import { Phrasebook } from '../../screens/Phrasebook';
import Signup from '../../screens/Signup';
import Login from '../../screens/Login';
import Profile from '../../screens/Profile';

import { SidebarProvider } from '../Sidebar/context';
import { AlertProvider } from '../Alert/context';

import BasicRoute from '../../layouts/BasicRoute';

const App = () => {
  return (
    <AlertProvider>
      <SidebarProvider>
        <BrowserRouter>

          <Switch>

            <Route exact path='/'>
              <Redirect to='/history' />
            </Route>

            <Route exact path='/history' component={History}/>
            <Route exact path='/search/:from/:to/:phrase' component={Search}/>

            <BasicRoute exact path='/phrasebook' title='Phrasebook' component={Phrasebook}/>
            <BasicRoute exact path='/profile' title='Profile' component={Profile}/>
            <BasicRoute exact path='/signup' title='Sign up' component={Signup}/>
            <BasicRoute exact path='/login' title='Log in' component={Login}/>
            <Redirect to='/' />
          </Switch>

          <Alert />
          <Sidebar />
          <BottomNav />

        </BrowserRouter>
      </SidebarProvider>
    </AlertProvider>
  );
}

export default App;
