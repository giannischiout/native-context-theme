
import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { ThemeContext } from "../../../context/theme-context/theme-context";

const ViewBody = (props) => {
  const { theme } = useContext(ThemeContext)
  return (

    <View style={[styles.body, styles[theme]]}>
      {console.log(theme)}
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },
  light: {
    backgroundColor: 'white'
  },
  dark: {
    backgroundColor: 'black'
  }
});

export default ViewBody;
