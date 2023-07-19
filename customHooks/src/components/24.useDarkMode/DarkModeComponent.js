import React from 'react'
import useDarkMode from './useDarkMode';

const DarkModeComponent = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button 
        onClick={() => setDarkMode(!darkMode)}
        style ={{
            border: `1px solid ${darkMode ? "white" : "black"}`,
            background: "none",
            color: darkMode ? "white" : "black"
        }}
        >
       Toggle Dark Mode
    </button>
  )
}

export default DarkModeComponent
