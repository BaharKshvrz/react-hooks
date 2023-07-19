import React from 'react'
import useCookie from './useCookie'

const CookieComponent = () => {
  const [value, update, remove] = useCookie("name", "John");
  return (
    <>
      <div>{value}</div>
      <button
         onClick={() => update("Bahar")}
       >
        Change Name to Bahar
      </button>
      <button onClick={remove}>Delete Name</button>
    </>
  )
}

export default CookieComponent
