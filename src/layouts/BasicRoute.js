import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';

const BasicRoute = ({ component: Component, title, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <div className="App">
        <Header title={title}/>
        <div className='container'>
          <Component {...props} />
        </div>
      </div>
    )} />
  );
};

export default BasicRoute;