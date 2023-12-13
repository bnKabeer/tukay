import { StyleSheet, TextInput, View, Text } from "react-native";
import { SCREEN_HEIGHT } from "../Constants/Dimensions";

export default function Input({ inputConfig, children }) {
  return (
    <View style={styles.input}>
      <Text style={styles.label}>{children}</Text>
      <TextInput {...inputConfig} style={styles.inputContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    paddingLeft: SCREEN_HEIGHT * 0.01,
    paddingVertical: SCREEN_HEIGHT * 0.016,
    borderRadius: 12,
    width: 350,
    marginVertical: SCREEN_HEIGHT * 0.01,
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  label: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "400",
  },
  input: {
    marginVertical: SCREEN_HEIGHT * 0.008,
  },
});
