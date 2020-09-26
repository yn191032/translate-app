import React, { useState } from 'react';

import QuickLangButton from './QuickLangButton';

const QuickLangs = ({ onChangeFrom, onChangeTo }) => {
  const [toChange, setToChange] = useState(true);

  const setLang = (value) => () => {
    toChange ? onChangeFrom(value) : onChangeTo(value);
    setToChange(!toChange);
  };

  return (
    <>
      <QuickLangButton value='by' onClick={setLang('by')} />
      <QuickLangButton value='pl' onClick={setLang('pl')} />
      <QuickLangButton value='en' onClick={setLang('en')} />
    </>
  );
};

export default QuickLangs;