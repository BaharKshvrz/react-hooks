import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => setCounter(prev => prev + 1);
  const handleDecrement = () => setCounter(prev => prev - 1);

  return (
    <>
       <button type="button" onClick={handleIncrement}> + </button>
         {counter}
        <button type="button" onClick={handleDecrement}> - </button>
    </>
  )
}

export default Counter
