import { useEffect, useState } from 'react';

import { getSearchResults } from '../../../api';

export const useSearch = (from, to, phrase) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    getSearchResults(from, to, phrase)
      .then(data => {
        setResults(data);
      });
  }, [from, to, phrase]);

  return {
    results,
  };
};