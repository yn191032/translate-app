import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Topbar from '../Topbar';
// import BackButton from './BackButton';
import Suggest from './Suggest';
import Langs from './Langs';
import SearchForm from './SearchForm';

import useLangsOptions from './hooks/useLangsOptions';
import useLangs from './hooks/useLangs';

const SearchHeader = () => {
  const history = useHistory();
  const [phrase, setPhrase] = useState('');
  const { from, to, setFrom, setTo } = useLangs();
  const options = useLangsOptions();

  const submitPhrase = (value) => (e) => {
    e.preventDefault();
    setPhrase('');
    history.push(`/search/${from}/${to}/${value}`);
  };

  return (
    <>
      <Topbar>
        {/* <BackButton /> */}
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
        from={from} 
        to={to} 
        phrase={phrase} 
        onClick={submitPhrase} 
      />
    </>
  );
};

export default SearchHeader;