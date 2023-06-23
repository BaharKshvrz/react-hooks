import React from 'react'
import useStateWithHistory from './useStateWithHistory'

const StateWithHistoryComponent = () => {
  const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1);

  return (
    <>
      <div>count: {count}</div>
      <div>array: {history.join(",")}</div>
      <div>Pointer: {pointer}</div>
      <button onClick={() => setCount(currentCoount => currentCoount * 2)}>Double</button>
      <button onClick={() => setCount(currentCoount => parseInt(currentCoount) + 1)}>Increment</button>
      <button onClick={back}> Back Poninter </button>
      <button onClick={forward}> Forward Poninter</button>
      <button onClick={() => go(3)}> Go to index 3 </button>
    </>
  )
}

export default StateWithHistoryComponent
