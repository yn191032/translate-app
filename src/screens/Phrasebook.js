import  React, { useEffect } from 'react';

import { LinearProgress } from '@material-ui/core';

import useFetch from '../hooks/useFetch';
import List from '../components/List';
import PhrasebookListItem from '../components/List/PhrasebookListItem';

const Phrasebook = () => {
  const [{ response }, api] = useFetch();

  useEffect(() => {
    api(`/phrasebook`);
  }, []);

  return !response
    ? <LinearProgress />
    : <List list={response} component={PhrasebookListItem} onRemove={f=>f} />;
};

export default Phrasebook;