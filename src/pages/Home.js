import React from 'react';

import Search from '../components/Search';
import Header from '../components/Header';
import CardList from '../components/CardList';
import QuickButtons from '../components/QuickButtons';

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { Fab, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const Home = () => {
  return (
    <div className="App">
      <Header title='Create a new card' search={true} />
      <Search />
      <Container className='container'>
        <CardList />
      </Container>
      {/* <QuickButtons /> */}
    </div>
  );
};

export default Home;