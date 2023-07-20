import { useEffect, useRef } from 'react'
import useRenderCount from '../29.useRandomCount/useRenderCount'

function useDebugInformation(compoenetnName, props) {
  const count = useRenderCount()
  const changedProps = useRef({});
  const previousProps = useRef(props)
  const lastRenderTimestamp = useRef(Date.now())

  const propKeys = Object.keys({ ...props, ...previousProps})
  // Give me all things that has changed between previous and now
  changedProps.current = propKeys.reduce((obj, key) => {
     return {
        ...obj,
        [key]: { previous: previousProps.current[key], current: props[key] }
     }
  }, {})

  const info = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
    lastRenderTimestamp: lastRenderTimestamp.current
  }

  useEffect(() => {
    previousProps.current = props;
    lastRenderTimestamp.current = Date.now();
    console.log("[debug-info],", compoenetnName, info);
   })

  return info
}

export default useDebugInformation
