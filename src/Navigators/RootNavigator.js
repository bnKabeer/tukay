import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
