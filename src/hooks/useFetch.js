import { useState, useEffect, useCallback, useRef } from 'react';

import { useAlert } from '../components/Alert/context';
import { APICall } from '../api';

const useFetch = (initialData = 0) => {
  const isMounted = useRef(false);
  const [response, setResponse] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(0);
  const alert = useAlert();

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  const fetchFunc = useCallback((url, method = 'get', data = {}) => {
    console.log(`useFetch(${url})`);
    
    setLoading(true);
    APICall(url, method, data).then(res => {
      console.log(`APICall(${method}, ${url}) => `, res);
      if (isMounted.current) {
        setResponse(res);
        setLoading(false);
      }
    }).catch(err => {
      if (isMounted.current) {
        setError(err);
        setLoading(false);
      }
    });
  });

  useEffect(() => {
    if (error.message) {
      alert.show(`ERROR: ${error.message} (${error.config.method} ${error.config.url})`);
    }
  }, [error, alert]);

  return [{ response, loading }, fetchFunc];
};

export default useFetch;