import {useState, useEffect} from 'react';
import axios from 'axios';

export const useFetch = (url: string, options?: object) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(url, {params: options});
      setResponse(res?.data);
    } catch (e) {
      setError(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {response, error};
};
