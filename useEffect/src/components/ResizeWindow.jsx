import { useEffect, useState } from 'react';

const ResizeWindow = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const handleResize = () => {
     setWindowWidth(window.innerWidth);
  }
  
  useEffect(() => {
     window.addEventListener('resize', handleResize);

     // clean up function 
     return () => {
       window.removeEventListener('resize', handleResize);
     }
  }, []);

  return (
    <>
         {windowWidth}
    </>
  )
}

export default ResizeWindow
