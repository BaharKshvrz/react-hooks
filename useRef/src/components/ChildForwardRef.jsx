import React from 'react'

const ChildForwardRef = (props, ref) => {
  return (
      <input type="text" ref={ref}/>
  )
}

export default React.forwardRef(ChildForwardRef)
