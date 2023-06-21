import React, { useImperativeHandle } from 'react'

const ChildForwardRef = (props, ref) => {
  useImperativeHandle(ref, () => {
    return { alertHi: () => alert("hi") }
  }, []);

  return (
      <input type="text"/>
  )
}

export default React.forwardRef(ChildForwardRef)
