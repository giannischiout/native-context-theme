import React, { useContext, useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { ThemeContext } from "../../context/theme-context/theme-context";
const LoginInput = (props) => {
  const { theme } = useContext(ThemeContext)
  console.log()
  const onFocus = () => {
    setClear(prev => !prev)
  }
  return (
    <>
      <TextInput
        style={[styles.input, props.style]}
        onChangeText={props.value}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={theme === 'light' ? 'black' : 'white'}
        keyboardType={props.keyboardType}
        onFocus={props.onFocus} />

    </>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  light: { color: 'black' },
  dark: { color: 'white' }


});

export default LoginInput;