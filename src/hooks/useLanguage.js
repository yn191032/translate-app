import { useState, useEffect } from "react";

const api = {
  langs: [
    { value: 'by', label: 'belarusian' },
    { value: 'en', label: 'english' },
    { value: 'pl', label: 'polish' },
    { value: 'ru', label: 'russian' },
    { value: 'fr', label: 'franch' },
    { value: 'bg', label: 'bulgarian' },
    { value: 'uk', label: 'ukranian' },
  ],
  user: {
    defaultLanguages: { from: 'en', to: 'by' },
  }
};

const useLanguage = () => {
  const [options, setOptions] = useState([{ value: '', label: '' }]);
  const [defaults, setDefaults] = useState({ from: null, to: null });
  const [toChange, setToChange] = useState({ from: true, to: false });

  useEffect(() => {
    console.log('options', options);
    console.log('defaults', defaults);
    console.log('toChange', toChange);
  });

  useEffect(() => {
    // api
    setOptions(api.langs); 
    // api
    setDefaults(api.user.defaultLanguages);
  }, []);

  const toggleToChange = () => {
    setToChange({ 
      from: !toChange.from,
      to: !toChange.to,
    });
  };

  const setFrom = (from) => {
    //api
    setDefaults(prevState => ({ ...prevState, from }));
  };

  const setTo = (to) => {
    //api
    setDefaults(prevState => ({ ...prevState, to }));
  };

  const setQuickLang = (value) => () => {
    if (toChange.from) {
      setFrom(value);
    }

    if (toChange.to) {
      setTo(value);
    }

    toggleToChange();
  };

  const switchLangs = () => {
    const toSwitch = { ...defaults };
    setFrom(toSwitch.to);
    setTo(toSwitch.from);
  };

  return {
    defaults,
    options,
    setQuickLang,
    setFrom,
    setTo,
    switchLangs,
  };
};

export default useLanguage;