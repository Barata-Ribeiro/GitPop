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
      if (!response.ok) {
        const json = await response.json();
        throw {
          message: json.message,
          status: response.status,
          documentation_url: json.documentation_url,
        };
      }
      const json = await response.json();
      setData(json);
      return { response, json };
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch cancelled");
      } else {
        setError(error);
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
