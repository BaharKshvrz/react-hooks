import React, { useState } from 'react'
import ChildForwardRef from './ChildForwardRef';
import { useRef } from 'react';

const ParentForwardRef = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();  
  const focusInput = () => {
     inputRef.current.alertHi();
  }
  
  return (
    <div>
       <ChildForwardRef 
        ref={inputRef} 
        value={value}
        onChange= {e => setValue(e.target.value)}
        />
       <button onClick={focusInput}>Focu on Element</button>
    </div>
  )
}

export default ParentForwardRef
