import React from 'react'
import useMediaQuery from './useMediaQuery'

const MediaQueryComponent = () => {
  const isLarge = useMediaQuery("(min-width: 500px)")

  return <div> Large: {isLarge.toString()}</div>
 }

export default MediaQueryComponent
