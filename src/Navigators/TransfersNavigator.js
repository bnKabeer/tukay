import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions, StyleSheet, View } from "react-native";
import BeggersScreen from "../screens/BeggersScreen";
import GiversScreen from "../screens/GiversScreen";

const Tab = createMaterialTopTabNavigator();

export default function TransfersNavigator() {
  const screenWidth = Dimensions.get("window").width;
  const tabCount = 2;
  const tabWidth = screenWidth / tabCount - 60;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#03515D",
          height: 150,
          paddingTop: 75,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        },
        tabBarItemStyle: {
          borderRadius: 20,
          width: screenWidth / tabCount - 20,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#fff",
          height: 3,
          marginBottom: 35,
          width: tabWidth,
          left: (screenWidth / tabCount - tabWidth) / 2,
          // right: (screenWidth / tabCount - tabWidth) / 4,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 600,
        },
        tabBarContentContainerStyle: {
          backgroundColor: "#a4abab33",
          marginHorizontal: 20,
          borderRadius: 12,
          justifyContent: "center",
        },
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen name="Beggers" component={BeggersScreen} />
      <Tab.Screen name="Givers" component={GiversScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#03515D",
    position: "absolute",
    top: 0,
    width: "100%",
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  innerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#a4abab33",
    width: "80%",
    borderRadius: 12,
  },
});
