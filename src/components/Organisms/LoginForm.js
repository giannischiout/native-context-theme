import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import LoginInput from "../Molecules/LoginInput";
import Text from "../Atoms/Text/TextPlain";
import { UserContext } from "../../context/userContext";
import { ThemeContext } from "../../context/theme-context/theme-context";


const LoginForm = () => {
  const [setUserState, userState] = useContext(UserContext);
  const { theme } = useContext(ThemeContext)
  const [placeHolder, setPlaceholder] = useState({
    username: 'Usename',
    password: 'Password',
  })


  const handlePass = text => setUserState((prev) => {
    return { ...prev, password: text }
  })
  const handleUsername = text => setUserState((prev) => {
    return { ...prev, username: text }
  })


  return (
    <>
      <View style={[styles.inputContainer, styles[theme]]}>
        {placeHolder.username == null && <Text>Username</Text>}
        <LoginInput
          onChangeText={handleUsername}
          value={userState.username}
          label={'username'}
          placeholder={placeHolder.username}
          onFocus={() => setPlaceholder(prev => {
            return { ...prev, username: null }
          })}
        />
      </View>
      <View style={[styles.inputContainer, styles[theme]]}>
        {placeHolder.password == null && <Text>Password</Text>}
        <LoginInput
          onChangeText={handlePass}
          value={userState.username}
          label={'password'}
          placeholder={placeHolder.password}
          onFocus={() => setPlaceholder(prev => {
            return { ...prev, password: null }
          })}
        />
      </View>

    </>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 0.2,
    width: '100%',
    marginVertical: 5,
    paddingVertical: 2,
  },
  light: {
    borderBottomColor: 'black'
  },
  dark: {
    borderBottomColor: 'white'
  }
});
export default LoginForm;