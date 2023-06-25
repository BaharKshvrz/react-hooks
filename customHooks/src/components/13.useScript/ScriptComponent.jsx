import React from 'react'
import useScript from './useScript'

// use this custom hook to load external script in a specific situation

const ScriptComponent = () => {
  const { loading, error } = useScript(
     "https://code.jquery.com/jquery-3.6.0.min.js"
  )
  if (loading) return <div>...Loading</div>
  if (error) return <div>Error</div>
  return <div>{window.$(window).width()}</div>
}

export default ScriptComponent
