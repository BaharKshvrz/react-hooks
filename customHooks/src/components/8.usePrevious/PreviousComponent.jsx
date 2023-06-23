import React, { useState } from 'react'
import usePrevious from './usePrevious';

const PreviousComponent = () => {
  const [count, setCount] = useState(0);  
  const [name, setName] = useState("Bahar");
  const prviousCount = usePrevious(count);

  return (
    <>
      <div> {name}</div>
      <div>current: {count},  previousCoount: {prviousCount}</div>
      <button onClick={ () => setCount(currentCount => currentCount + 1)}> Increment </button>
      <button onClick={ () => setName("Keshavarz")}> Change Name </button>
    </>
  )
}

export default PreviousComponent
