import { useEffect, useRef } from "react";
import isEqual from "lodash/fp/isEqual";

const useDeepCompareEffect = (callback, dependencies) => {
   const currentDependenciesRef = useRef();
   // If the dependencies have changed, this won't render again
   if (!isEqual(currentDependenciesRef.current, dependencies)) {
       currentDependenciesRef.current = dependencies;
   }

   useEffect(callback, [currentDependenciesRef.current]);
}

export default useDeepCompareEffect
