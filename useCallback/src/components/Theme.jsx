import { useCallback, useState } from 'react';
import List from './List';


const Theme = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number])

  const theme = {
     backgroundColor: dark ? "black" : "white",
     color : dark ? "white" : "black",
  }

  return (
    <div style={theme}>
        <input type="number" value={number} onChange= {e => setNumber(e.target.value)} />
        <button type="button" onClick={() => setDark(prevDark => !prevDark)}> Toggle Theme </button>
        <List getItems={getItems}/>
    </div>
  )
}
export default Theme
