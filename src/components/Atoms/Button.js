import React, { useContext, useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import TextPlain from "./Text/TextPlain";
import { ThemeContext } from "../../context/theme-context/theme-context";

const Button = (props) => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Pressable style={[styles.button, styles[theme]]} onPress={toggleTheme}>
      <TextPlain>{props.text}</TextPlain>
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
  Light: {
    backgroundColor: 'black'
  },
  Dark: {
    backgroundColor: 'white'
  }
});
export default Button;