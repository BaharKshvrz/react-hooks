import React, { useEffect, useRef, useState } from 'react'
import useDeepCompareEffect from './useDeepCompareEffect';

const DeepCompareEffectComponent = () => {
 const [ age, setAge ] = useState(20);
 const [ otherCount, setOtherCount ] = useState(0);
 const useEffectCountRef = useRef();
 const useDeepCompareEffectCountRed = useRef();
 const person = { age: age, name: "Bahar"};

 useEffect(() => {
     useEffectCountRef.current.textContent = parseInt(useEffectCountRef.current.textContent) + 1;
 }, [person])

 useDeepCompareEffect(() => {
    useDeepCompareEffectCountRed.current.textContent = parseInt(useDeepCompareEffectCountRed.current.textContent) + 1;
}, [person])

  return (
    <div>
        <div>
            useEffect: <span ref={useEffectCountRef}>0</span>
        </div>
        <div>
            useDeepCompareEffect: <span ref={useDeepCompareEffectCountRed}>0</span>
         </div>
        <div>other count: {otherCount}</div>
        <div>{ JSON.stringify(person) }</div>
        <button onClick={() => setAge(currAge => currAge + 1)}>
            Increment Age
       </button>
       <button onClick={() => setOtherCount(count => count + 1)}>
           Increment Other Count
      </button>
  </div>
  )
}

export default DeepCompareEffectComponent
