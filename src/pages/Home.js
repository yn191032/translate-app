import React from 'react';

import Container from '@material-ui/core/Container';

import Search from '../components/Search';
import Header from '../components/Header';
import CardList from '../components/CardList';

import { LanguageProvider } from '../context/LanguageContext';
import { SearchProvider } from '../context/SearchContext';

const Home = () => {
  return (
    <div className="App">
      <LanguageProvider>
        <SearchProvider>
          <Header title='Create a new card' search={true} />
          <Search />
          <Container className='container'>
            <CardList />
          </Container>
        </SearchProvider>
      </LanguageProvider>
    </div>
  );
};

export default Home;