import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../context/theme-context/theme-context';

const TextPlain = (props) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Text style={[styles.text, styles[theme]]}>{props.children}</Text>
  )
}


const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: 0.5
  },
  light: {
    color: '#000'
  },
  dark: {
    color: '#fff'
  },
})
export default TextPlain;
