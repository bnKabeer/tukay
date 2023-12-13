import "react-native-gesture-handler";
import RootNavigator from "./src/Navigators/RootNavigator";
import { AuthContext } from "./src/Context/Context";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [token, setToken] = useState("");
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      <StatusBar style="dark" />
      <RootNavigator />
    </AuthContext.Provider>
  );
}
