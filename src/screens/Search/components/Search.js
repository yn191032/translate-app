import React from 'react';
import { useParams } from 'react-router-dom';

import { LinearProgress } from '@material-ui/core';
import { useSearch } from '../hooks/useSearch';
import ResultsItem from './ResultsItem';
import { Header } from './Header';
import List from '../../../components/List';

export const Search = () => {
  const { from, to, phrase } = useParams();
  const { results } = useSearch(from, to, phrase);
  console.log(from, to, phrase, results);
  return (
    <>
      <Header />
      { 
        results 
        ? <List list={results} component={ResultsItem} />
        : <LinearProgress />
      }
    </>
  );
};