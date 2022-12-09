import React, { useContext, useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { ThemeContext } from "../../context/theme-context/theme-context";

const Button = (props) => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Pressable style={[styles.button, styles[theme]]} onPress={toggleTheme}>
      <Text style={[styles[`text${theme}`]]}>{props.text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  light: {
    backgroundColor: 'black'
  },
  dark: {
    backgroundColor: 'white'
  },
  textlight: {
    color: 'white'
  },
  textdark: {
    color: 'black'
  },
});
export default Button;