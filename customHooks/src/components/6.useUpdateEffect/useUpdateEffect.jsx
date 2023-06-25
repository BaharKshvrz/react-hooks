import { useEffect, useRef } from 'react'

const useUpdateEffect = (callback, dependencies) => {
  const firstRenderedRef = useRef(true);

  /*
   generally useEffect runs on mount and every time that dependencies have changed
   here we want to avoid the first time
  */
   useEffect(() => {
      if (firstRenderedRef.current) {
           console.log("inside if");
          firstRenderedRef.current = false;
          return
      }
      console.log("rendered");
      return callback();
   },[callback, dependencies]);
}

export default useUpdateEffect
