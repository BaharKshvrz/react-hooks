import React from 'react'
import useArray from './useArray'

const ArrayComponent = () => {
 const { array, set, push, remove, filter, update, clear } = useArray(
    [1, 2, 3, 4, 5]
 )
  return (
    <div>
      <div>{ array.join(", ") }</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change second element to 9</button>
      <button onClick={() => remove(1)}>Remove second element</button>
      <button onClick={() => filter(n => n < 3)}>Filter element</button>
      <button onClick={() => set([10, 20])}>Set to 10, 20</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}

export default ArrayComponent
