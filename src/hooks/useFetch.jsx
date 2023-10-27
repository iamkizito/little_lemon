import { useState, useEffect } from "react";


const useFetch = (url, requestData = {}, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    const accessToken = localStorage.getItem('token');
  
    const fetchOptions = {
      method: 'GET',
      headers: {
        authentication: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(requestData),
      ...options,
    };
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url, fetchOptions);
          if (response.status === 200) {
            const responseData = await response.json();
            setData(responseData);
          } else {
            setError(response.error);
          }
        } catch (error) {
          setError(error);
        }
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
    return { data, loading, error };
  };

export default useFetch;