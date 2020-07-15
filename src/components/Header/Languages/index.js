import React from 'react';

import LangDefault from './LangDefault';
import LangQuick from './LangQuick';
import LangSwitch from './LangSwitch';
import { useLanguageContext } from '../../../contexts/LanguageContext';

const Languages = (props) => {
  const { 
    defaults,
    options,
    setQuickLang,
    setFrom,
    setTo,
    switchLangs } = useLanguageContext();

  return (
    <>
      <div className='lang-switch' {...props}>
        <LangDefault onSet={setFrom} value={defaults.from} options={options}/>
        <LangSwitch onClick={switchLangs} />
        <LangDefault onSet={setTo} value={defaults.to} options={options}/>
      </div>

      <LangQuick value='by' onClick={setQuickLang('by')}/>
      <LangQuick value='pl' onClick={setQuickLang('pl')}/>
      <LangQuick value='en' onClick={setQuickLang('en')}/>
    </>
  );
};

export default Languages;