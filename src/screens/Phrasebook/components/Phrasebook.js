import  React from 'react';

import { LinearProgress } from '@material-ui/core';

import List from '../../../components/List';
import PhrasebookListItem from './PhrasebookListItem';

import { usePhrasebook } from '../hooks/usePhrasebook';

export const Phrasebook = () => {
  const { phrasebook } = usePhrasebook();

  return phrasebook
    ? <List list={phrasebook} component={PhrasebookListItem} onRemove={f=>f} />
    : <LinearProgress />
};