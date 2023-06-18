import { useState, useRef, useEffect } from 'react';

const TrackOfRendering = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(0);

  useEffect(() => {
     inputRef.current = inputRef.current + 1;
  });

  return (
    <>
       <input type="text"  value={inputValue} onChange={ e => setInputValue(e.target.value)} />
       <h5>{` ${inputRef.current} times rendered!`}</h5>
    </>
  )
}

export default TrackOfRendering
