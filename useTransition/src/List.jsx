import { useState, useTransition } from 'react';

const List = () => {
   console.log("render");
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const LIST_SIZE = 20000;

  const handleChange = (e) => {
     setInput(e.target.value);
     // With putting this here, we have two renders instead of one render
     startTransition(() => {
        const l = [];
        for (let i= 0; i < LIST_SIZE; i++) {
            l.push(e.target.value);
        }
        setList(l);
     });
  }

  return (
    <>
       <input type="text" value={input} onChange={handleChange} />
       { isPending ? "Loading...." : list.map((item, index) => {
          return <div key={index}>{item}</div>
          })
        }
    </>
  )
}

export default List
