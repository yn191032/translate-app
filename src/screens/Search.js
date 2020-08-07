import React, { useEffect } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import useFetch from '../hooks/useFetch';
import List from '../components/List';
import ResultsListItem from '../components/List/ResultsListItem';

const Search = (props) => {
  console.log('<Search />');
  const { from, to, phrase } = props.match.params;
  const [{ response }, api] = useFetch();

  useEffect(() => {
    api(`/search/${from}/${to}/${phrase}`);
  }, [from, to, phrase]);
  
  return !response 
    ? <LinearProgress /> 
    : <List list={response} component={ResultsListItem} />;
};

export default Search;