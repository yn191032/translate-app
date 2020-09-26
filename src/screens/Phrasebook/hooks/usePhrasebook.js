import { useEffect, useState } from 'react';

import { getPhrasebook } from '../../../api';

export const usePhrasebook = () => {
  const [phrasebook, setPhrasebook] = useState(null);

  useEffect(() => {
    getPhrasebook()
      .then(data => {
        setPhrasebook(data);
      });
  }, []);

  return {
    phrasebook,
  };
};