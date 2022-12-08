
import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { ThemeContext } from "../../../context/theme-context/theme-context";

const ViewBody = (props) => {
  const { theme } = useContext(ThemeContext)
  console.log('body' + theme)
  return (

    <View style={[styles.body, styles[`container${theme}`]]}>
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
  containerLight: {
    backgroundColor: 'white'
  },
  containerDark: {
    backgroundColor: 'black'
  }
});

export default ViewBody;
