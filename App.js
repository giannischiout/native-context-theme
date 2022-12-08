import React, { useContext } from "react";
import { Text, View } from "react-native";
import Button from "./src/components/Atoms/Button";
import ViewBody from "./src/components/Atoms/Views/ViewBody";
import { ThemeContext } from "./src/context/theme-context/theme-context";
import { Theme } from "./src/context/theme-context/theme-context";

const App = () => {
  return (
    // <Text>Hello darkness my old friend</Text>
    <Theme>
      <ViewBody>
        <Button text="Toggle Theme" />
      </ViewBody>
    </Theme>



  )
}
export default App;