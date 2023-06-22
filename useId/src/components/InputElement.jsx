import React, { useId } from 'react'

const InputElement = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`}/>
      <br/>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`}/>
    </>
 )
}

export default InputElement
