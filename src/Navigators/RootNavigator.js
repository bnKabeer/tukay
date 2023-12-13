import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";

export default function RootNavigator() {
  const { token } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {token ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
