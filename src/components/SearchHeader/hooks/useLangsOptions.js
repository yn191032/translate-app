import { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';

const useLangsOptions = () => {
  const [{ response }, api] = useFetch(0);

  useEffect(() => {
    api('langs/options');
  }, []);

  return response;
};

export default useLangsOptions;