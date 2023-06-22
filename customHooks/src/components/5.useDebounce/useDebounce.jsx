import { useEffect } from 'react'
import useTimeout from "../4.useTimeout/useTimeout";

const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);
  // when we click on increment, it continously reset 
  // as soon as we stop clicking, the timeout works
  useEffect(reset, [...dependencies, reset])
  // the first time, clear runs
  useEffect(clear, [clear])
}

export default useDebounce
