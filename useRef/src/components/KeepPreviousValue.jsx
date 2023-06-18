import { useState, useRef, useEffect } from 'react';

const KeepPreviousValue = () => {
  const [name, setName] = useState("");
  const prevValue = useRef("");

  useEffect(() => {
      prevValue.current = name;
  }, [name]);

  return (
    <>
       <input type="text"  value={name} onChange={ e => setName(e.target.value)} />
       <h5>{` Previous value is:  ${prevValue.current}!`}</h5>
    </>
  )
}

export default KeepPreviousValue
