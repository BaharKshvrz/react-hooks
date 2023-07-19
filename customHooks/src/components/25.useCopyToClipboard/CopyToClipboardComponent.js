import React, { useState } from 'react'
import useCopyToClipboard from './useCopyToClipboard'

const CopyToClipboardComponent = () => {
  const [textInput, setTextInput] = useState("");
  const [copyToClipboard, {success}] = useCopyToClipboard();  
  return (
    <>
     <button
       onClick={() => copyToClipboard(textInput)}
     >
    { success ? "Copied:" : "Copy Text" }
    </button>
    <input type='text' onChange={(e) => setTextInput(e.target.value)}/>
    </>
 )
}

export default CopyToClipboardComponent
