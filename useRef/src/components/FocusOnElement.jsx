import { useState, useRef } from 'react';

const FocusOnElement = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const focus = () => {
     inputRef.current.focus();
  }

  return (
    <>
       <input type="text" ref={inputRef}  value={inputValue} onChange={ e => setInputValue(e.target.value)} />
       <button onClick={focus}> Focus </button>
    </>
  )
}

export default FocusOnElement
