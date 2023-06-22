import { useEffect, useRef } from 'react'

const useUpdateEffect = (callback, dependencies) => {
  const firstRenderedRef = useRef(true);

   useEffect(() => {
      if (firstRenderedRef.current) {
           console.log("indide if");
          firstRenderedRef.current = false;
          return
      }
      console.log("rendered");
      return callback();
   },[callback, dependencies]);
}

export default useUpdateEffect
