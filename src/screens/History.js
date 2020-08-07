import React, { useEffect } from 'react';

import { LinearProgress } from '@material-ui/core';

import useFetch from '../hooks/useFetch';
import List from '../components/List';
import HistoryListItem from '../components/List/HistoryListItem';

const History = () => {
  console.log('<History />');
  const [{ response }, api] = useFetch();

  useEffect(() => {
    api(`/history`);
  }, []);
  
  return !response
    ? <LinearProgress />
    : <List list={response} component={HistoryListItem} />;
};

export default History;