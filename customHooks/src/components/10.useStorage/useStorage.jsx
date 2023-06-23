import { useCallback, useEffect, useState } from 'react'

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage)
}

export function useSessionStorage(key, defaultValue) {
 return useStorage(key, defaultValue, window.sessionStorage);
}

const useStorage = (key, defaultValue, storageObject) => {
  // Get data  
  const [value, setValue] = useState(() => {
     const jsonValue = storageObject.getItem(key);
     if (jsonValue != null) return JSON.parse(jsonValue);

     if (typeof defaultValue === "function") {
        return defaultValue();
     } else {
        return defaultValue;
     }
  })

  // Set data
  useEffect(() => {
   if (value === undefined) return storageObject.removeItem(key);
       storageObject.setItem(key, JSON.stringify(value));
   }, [key, value, storageObject])

  const remove = useCallback(() => {
     setValue(undefined)
  }, []);

  return [value, setValue, remove]
}

export default useStorage
