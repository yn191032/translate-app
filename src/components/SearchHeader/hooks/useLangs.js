import { useState, useEffect } from "react";

import useFetch from '../../../hooks/useFetch';

const useLangs = () => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [{ response, loading }, getLangs] = useFetch();

  useEffect(() => {
    getLangs('/langs/custom', 'get');
  }, []);
  
  useEffect(() => {
    setFrom(response.from);
    setTo(response.to)
  }, [response]);

  useEffect(() => {
    if (from && to) {
      getLangs('/langs/custom', 'post', { from , to });
    }
  }, [from, to]);
  
  return { 
    from, 
    to, 
    setFrom, 
    setTo, 
    loading,
  };
};

export default useLangs;