import React from 'react';

import Container from '@material-ui/core/Container';

import Search from '../components/Search';
import Header from '../components/Header';
import CardList from '../components/CardList';

import { LanguageProvider } from '../contexts/LanguageContext';
import { SearchProvider } from '../contexts/SearchContext';
import { SearchResultProvider } from '../contexts/SearchResultContext';

const Home = () => {
  return (
    <div className="App">
      <LanguageProvider>
        <SearchProvider>
          <Header search={true} />
          <Search />
          <SearchResultProvider>
            <Container className='container'>
              <CardList />
            </Container>
          </SearchResultProvider>
        </SearchProvider>
      </LanguageProvider>
    </div>
  );
};

export default Home;