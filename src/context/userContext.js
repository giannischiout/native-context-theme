import React from "react";
import { useState, createContext } from "react";


export const UserContext = createContext();


export const UserLayoutContext = ({ children }) => {
  const [userState, setUserState] = useState({
    username: '',
    password: ''
  })

  return (
    <UserContext.Provider value={[userState, setUserState]}>
      {children}
    </UserContext.Provider >
  )
}

