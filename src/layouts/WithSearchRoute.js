import React from 'react';
import { Route } from 'react-router-dom';

import SearchHeader from '../components/SearchHeader';

const BasicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <div className="App">
        <SearchHeader />
        <div className='container'>
          <Component {...props} />
        </div>
      </div>
    )} />
  );
};

export default BasicRoute;