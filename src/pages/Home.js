import React from 'react';

import Container from '@material-ui/core/Container';

import Search from '../components/Search';
import Header from '../components/Header';
import CardList from '../components/CardList';

const Home = () => {
  return (
    <div className="App">
      <Header title='Create a new card' search={true} />
      <Search />
      <Container className='container'>
        <CardList />
      </Container>
    </div>
  );
};

export default Home;