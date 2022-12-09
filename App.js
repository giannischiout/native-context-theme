import React, { useContext } from "react";
import { Text, View } from "react-native";
import Button from "./src/components/Atoms/Button";
import ViewBody from "./src/components/Atoms/Views/ViewBody";
import { ThemeContext } from "./src/context/theme-context/theme-context";
import { Theme } from "./src/context/theme-context/theme-context";
import { UserContext } from "./src/context/userContext";
import { UserLayoutContext } from "./src/context/userContext";
import LoginForm from "./src/components/Organisms/LoginForm";
const App = () => {
  return (
    <Theme>
      <UserLayoutContext>
        <ViewBody>
          <Button text="Toggle Theme" />
          <LoginForm />
        </ViewBody>
      </UserLayoutContext>

    </Theme>



  )
}
export default App;