import { useMemo, useState } from 'react';

const slowFunction = (num)  => {
  console.log("Calling Slow Func with:", num);
  for (let i= 0; i <= 100000000; i++) {}
  return num * 2;
}

const Theme = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
     return slowFunction(number);
  }, [number])

  const themeStyles = {
     backgroundColor: dark ? "black" : "white",
     color : dark ? "white" : "black",
  }

  return (
    <>
        <input type="number" value={number} onChange= {e => setNumber(e.target.value)} />
        <button type="button" onClick={() => setDark(prevDark => !prevDark)}> Change Theme </button>
        <div style={themeStyles}>The Doubled Number is: {doubleNumber}</div>
    </>
  )
}
export default Theme
