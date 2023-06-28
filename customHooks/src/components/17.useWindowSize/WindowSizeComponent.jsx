import React from 'react'
import useWindowSize from './useWindowSize';

const WindowSizeComponent = () => {
    const { width, height } = useWindowSize();  
    
    return <div> {width} * {height} </div>
  }

export default WindowSizeComponent
