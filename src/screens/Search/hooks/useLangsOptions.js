import { useEffect, useState } from 'react';

import { getLangsOptions } from '../../../api';

export const useLangsOptions = () => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    getLangsOptions()
      .then(data => {
        setOptions(data);
      });
  }, []);

  return {
    options,
  };
};