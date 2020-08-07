import { useEffect, useState } from 'react';

import useFetch from '../../../hooks/useFetch';

const isValid = (phrase) => phrase.length > 3 ? true : false;

const useSuggests = (from, to, phrase) => {
  const [suggests, setSuggests] = useState(0);
  const [{ response }, getSuggests] = useFetch();

  useEffect(() => {
    if (isValid(phrase)) {
      setSuggests(response);
    } else {
      setSuggests(0);
    }
  }, [response]);
  
  useEffect(() => {
    if (isValid(phrase)) {
      getSuggests(`/suggests/${from}/${to}/${phrase}`);
    }
  }, [from, to, phrase]);

  return { suggests };
};

export default useSuggests;