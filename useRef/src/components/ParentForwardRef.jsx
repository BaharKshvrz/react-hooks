import React from 'react'
import ChildForwardRef from './ChildForwardRef';
import { useRef } from 'react';

const ParentForwardRef = () => {
  const inputRef = useRef();  
  const focusInput = () => {
     inputRef.current.focus();
  }
  
  return (
    <div>
       <ChildForwardRef ref={inputRef}/>
       <button onClick={focusInput}>Focu on Element</button>
    </div>
  )
}

export default ParentForwardRef
