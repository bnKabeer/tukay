import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, View } from "react-native";
import BeggersScreen from "../screens/BeggersScreen";
import GiversScreen from "../screens/GiversScreen";

const Tab = createMaterialTopTabNavigator();

export default function TransfersNavigator() {
  return (
    <View style={styles.conatiner}>
      <View style={styles.innerContainer}>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: "inherit",
            },
            tabBarItemStyle: { color: "#fff" },
            tabBarActiveTintColor: "#fff",
          }}
        >
          <Tab.Screen name="Beggers" component={BeggersScreen} />
          <Tab.Screen name="Givers" component={GiversScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
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
