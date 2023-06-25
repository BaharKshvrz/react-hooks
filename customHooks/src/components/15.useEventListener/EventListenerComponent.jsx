import React, { useState } from 'react'
import useEventListener from './useEventListener';

/*
  JS Syntax:
  addEventListener("keydown", (event) => {});
  onkeydown = (event) => {};
*/
const EventListenerComponent = () => {
  const [key, setKey] = useState("");
  useEventListener("keydown", e => {
    setKey(e.key)
  });  

  useEventListener("click", e => {
     alert("Clicked ME!");
  });  

  return (
     <>
       <button>Click ME!</button>
       <div> Last Key: {key}</div>
     </>
  )
}

export default EventListenerComponent
