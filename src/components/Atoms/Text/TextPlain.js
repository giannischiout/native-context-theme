import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../context/theme-context/theme-context';

const TextPlain = (props) => {
  const { theme } = useContext(ThemeContext)
  console.log('text ' + theme)
  return (
    <Text style={[styles.text, styles[`container${theme}`]]}>{props.children}</Text>
  )
}




const styles = StyleSheet.create({
  text: {
    fontSize: 17,
  },
  containerLight: {
    color: '#fff'
  },
  containerDark: {
    color: '#000'
  }
})
export default TextPlain;
