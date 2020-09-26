import { useEffect, useState } from 'react';

import { getSuggests } from '../../../api';

const isValid = (phrase) => phrase.length > 2 ? true : false;

export const useSuggests = (from, to, phrase) => {
  const [suggests, setSuggests] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isValid(phrase)) {
        getSuggests(from, to, phrase).then(data => {
          setSuggests(data);
        });
      } else {
        setSuggests(null);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [from, to, phrase]);

  return { suggests };
};