import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options = {}) => {
    const abortController = new AbortController();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        ...options,
        signal: abortController.signal,
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const json = await response.json();
      setData(json);
      return { response, json };
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch cancelled");
      } else {
        setError(error.message);
        return { error };
      }
    } finally {
      setLoading(false);
    }

    return () => {
      abortController.abort();
    };
  }, []);

  return { data, error, loading, request };
};

export default useFetch;
