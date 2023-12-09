import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SCREEN_HEIGHT } from "../Constants/Dimensions";

export default function Button({ children, background, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [styles.pressed, styles.btnPressed]
          : [styles.pressed, , background && { backgroundColor: "#f59e0b" }]
      }
    >
      <View style={[styles.container]}>
        <Text style={[styles.text, !background && styles.textColored]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

Button.defaultProps = {
  background: false,
  onPress: () => {},
};

const styles = StyleSheet.create({
  pressed: {
    borderRadius: 12,
    paddingHorizontal: 60,
    paddingVertical: SCREEN_HEIGHT * 0.016,
    borderWidth: 1,
    width: "100%",
    borderColor: "#D6F904",
    backgroundColor: "#D6F904",
  },
  container: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#03525F",
    fontWeight: "600",
  },
  textColored: {},
  btnPressed: {
    backgroundColor: "#D6F904",
  },
});
