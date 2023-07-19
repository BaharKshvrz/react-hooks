import { useLocalStorage } from '../10.useStorage/useStorage';
import * as translations from "./translations";

const useTranslation = () => {
  const [ language, setLanguage ] = useLocalStorage("language", "en");
 
  const translate = key => {
    const keys = key.split(".")
    return (
      getNestedTranslation(language, keys) ??
      key
    )
  }

  return  {
     language,
     setLanguage,
     t: translate,
  }
}

function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
  //  console.log(obj)
     return obj?.[key]
  }, translations[language])
}

export default useTranslation

/*
keys.reduce((obj, key) => {...}, translations[language]): 
The reduce method is used to iterate over the keys array and drill down into the nested structure of
the translations object. The obj parameter represents the current level of the nested object being accessed, 
and key is the key to access the next level.

return obj?.[key];: In each iteration, the function accesses the next level of the nested object using
the obj and key. The ?. (optional chaining) operator is used to handle cases where the obj might be null
or undefined. If obj is null or undefined at any level, the expression will short-circuit, and undefined will be returned.

The reduce method continues to iterate through the keys array, moving deeper into the nested 
structure until it reaches the final value specified by the last key in the array. The final value
is then returned as the result of the getNestedTranslation function.
*/