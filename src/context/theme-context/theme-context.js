import React, { useState, createContext } from "react";

export const themes = {
  light: 'light',
  dark: 'dark'
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

