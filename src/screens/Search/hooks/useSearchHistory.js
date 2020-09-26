import { useEffect, useState } from 'react';

import { getHistory } from '../../../api';

export const useSearchHistory = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    getHistory()
      .then(data => {
        setResults(data);
      });
  }, []);

  return {
    results,
  };
};