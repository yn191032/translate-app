import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Topbar from '../../../../components/Topbar';
import BackButton from './BackButton';
import SearchForm from './SearchForm';
import Suggest from './Suggest';
import Langs from './Langs';

import { useLangsOptions } from '../../hooks/useLangsOptions';
import { useSuggests } from '../../hooks/useSuggests';
import { useLangs } from '../../hooks/useLangs';

export const Header = () => {
  const history = useHistory();
  const [phrase, setPhrase] = useState('');
  const { from, to, setFrom, setTo } = useLangs();
  const { options } = useLangsOptions();
  const { suggests } = useSuggests(from, to, phrase);

  const submitPhrase = (value) => (e) => {
    e.preventDefault();
    setPhrase('');
    history.push(`/search/${from}/${to}/${value}`);
  };

  return (
    <>
      <Topbar>
        <BackButton />
        <Langs 
          from={from} 
          to={to} 
          setFrom={setFrom} 
          setTo={setTo}
          options={options}
        />
      </Topbar>
      <SearchForm 
        value={phrase}
        setValue={setPhrase} 
        onSubmit={submitPhrase(phrase)}
      />
      <Suggest 
        suggests={suggests} 
        onClick={submitPhrase} 
      />
    </>
  );
};