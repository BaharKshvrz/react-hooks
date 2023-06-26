import { useEffect, useRef } from 'react'

const useEventListener = (
    eventType,
    callback, 
    element = window
    ) => {

     const callbackRef = useRef(callback);
     // first setup
     useEffect(() => {
        callbackRef.current = callback;
     }, [callback])

     useEffect(() => {
        const handler = e => callbackRef.current(e)
        element.addEventListener(eventType, handler)

        // clean up the listener
        return () => element.removeEventListener(eventType, handler)
     }, [eventType, element])
   }

export default useEventListener
