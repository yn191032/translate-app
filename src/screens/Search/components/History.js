import React from 'react';

import { LinearProgress } from '@material-ui/core';

import { useSearchHistory } from '../hooks/useSearchHistory';
import List from '../../../components/List';
import HistoryItem from './HistoryItem';
import { Header } from './Header';

export const History = () => {
  const { results } = useSearchHistory();
  
  return (
    <>
      <Header />
      { 
        results 
        ? <List list={results} component={HistoryItem} />
        : <LinearProgress />
      }
    </>
  );
};