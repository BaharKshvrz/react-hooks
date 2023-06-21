import { useDebugValue, useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue !== "undefined" ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  useDebugValue(value); // show the value in react devtools extension

  return [value, setValue];
}

export default useLocalStorage
