import React, { useContext } from 'react'
import { ThemeContext } from './Context'

const Toolbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}   

export default Toolbar