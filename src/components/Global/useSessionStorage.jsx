import React from "react";

const useSessionStorage = (key, initial) => {
  const [state, setState] = React.useState(() => {
    // Initialize the useState by fetching the key from sessionStorage
    const session = window.sessionStorage.getItem(key);
    // Check if the key exists and return its value
    // If it doesn't exist, return the initial value
    return session ? session : initial;
  });

  React.useEffect(() => {
    window.sessionStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useSessionStorage;
