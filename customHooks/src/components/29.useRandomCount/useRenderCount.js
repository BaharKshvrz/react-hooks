import { useEffect, useRef } from 'react'

/*
 This custom hook counts how many times we click on the toggle button
*/
export default function useRenderCount() {
    const count = useRef(1)
    useEffect(() => {count.current++})
    return count.current
  }