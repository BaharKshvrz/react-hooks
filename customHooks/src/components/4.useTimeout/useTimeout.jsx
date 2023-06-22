import { useCallback, useEffect, useRef } from 'react'

const useTimeout = (callback, delay) => {
  const callbackRef = useRef(callback);    //() => setCount(0) changes in each render so we use ref to avoid this!
  const timeoutRef = useRef();

  useEffect(() => {
     callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
       timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay])

  const clear = useCallback(() => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []
  )  

   useEffect(() => {
     set();
     return clear;
   },[ delay, set, clear]);

   const reset = useCallback(() => {
     clear();
     set();
   }, [clear, set]);

  return { reset, clear}
}

export default useTimeout
