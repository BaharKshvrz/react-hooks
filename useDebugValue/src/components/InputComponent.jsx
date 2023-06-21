import React from 'react'
import useLocalStorage from './useLocalStorage';

const InputComponent = () => {
  const [firstName, setFirstName] = useLocalStorage("firstName", "Bahar");
  const [lastName, setLastName] = useLocalStorage("lastName", "Keshavarz");

  return (
    <div>
       Name: <input type='text' onChange={e => setFirstName(e.target.value)}/>
       <br/>
       {firstName}
       <hr/>
       Last: <input type='text' onChange={e => setLastName(e.target.value)}/>
       <br/>
       {lastName}
    </div>
  )
}

export default InputComponent
