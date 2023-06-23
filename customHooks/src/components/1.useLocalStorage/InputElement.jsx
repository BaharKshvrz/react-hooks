import React from 'react'
import useLocalStorage from './useLocalStorage';
import useLogger from '../2.useLogger/useLogger';

const InputElement = () => {
  const [name, setName] = useLocalStorage("data", "");
  useLogger(name);
  
  return (
    <>
      <input type="text" value={name} onChange={ e => setName(e.target.value)}/>
    </>
 )
}

export default InputElement
