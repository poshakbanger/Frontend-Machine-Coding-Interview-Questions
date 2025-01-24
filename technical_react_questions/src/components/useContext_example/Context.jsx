import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    const value = {theme, toggleTheme}

    return(
        <ThemeContext.Provider value={{ value }}>
            {props.childern}
        </ThemeContext.Provider>
    )
}