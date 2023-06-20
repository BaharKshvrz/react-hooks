import React, { useState } from 'react'
import List from "./List";

const InputComponent = () => {
  const [input, setInput] = useState("");

  return (
    <div>
       <input type='text' onChange={e => setInput(e.target.value)}/>
       <List input={input} />
    </div>
  )
}

export default InputComponent
