import { useEffect } from 'react'
import { useLocalStorage } from '../10.useStorage/useStorage'
import useMediaQuery from '../18.useMediaQuery/useMediaQuery'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode")  
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  console.log(prefersDarkMode)
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled])

  return [enabled, setDarkMode]
}

export default useDarkMode

/*
prefers-color-scheme::
The prefers-color-scheme CSS media feature is used to detect if a user has requested light or dark color themes.
A user indicates their preference through an operating system setting (e.g. light or dark mode) or a user agent setting. 

const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)"): 
This line sets the prefersDarkMode variable to true if the user's device prefers dark mode; otherwise, it will be false.

The line document.body.classList.toggle("dark-mode", enabled) is used to add or remove the "dark-mode" class to the <body> element
of the web page, based on the value of the enabled variable. 
This is a common approach to enable or disable specific styles for elements in the DOM based on the dark mode state.

Tip: we have this in css:
body.dark-mode {
  background-color: #333;
}
*/