import React from "react";
import { useState, createContext } from "react";


export const themes = {
  light: 'Light',
  dark: 'Dark'
}

export const ThemeContext = createContext();


export const Theme = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);


  const toggleTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark)
    }
    if (theme === themes.dark) {
      setTheme(themes.light)
    }
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider >
  )
}

