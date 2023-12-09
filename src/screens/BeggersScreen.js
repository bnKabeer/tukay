import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from "react-native";

import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../Constants/Dimensions";

const beggers = [
  {
    id: 0,
    image: require("../../assets/ally.png"),
    name: "Ally Lawal",
    number: "0123456789 - Opay",
  },
  {
    id: 1,
    image: require("../../assets/udon.png"),
    name: "Ufot Ubon",
    number: "0123456789 - Opay",
  },
  {
    id: 2,
    image: require("../../assets/white.png"),
    name: "Davio White",
    number: "0123456789 - Opay",
  },
  {
    id: 3,
    image: require("../../assets/dr.png"),
    name: "Dr. Omotola",
    number: "0123456789 - Opay",
  },
  {
    id: 4,
    image: require("../../assets/leye.png"),
    name: "Leye Connect",
    number: "0123456789 - Opay",
  },
  {
    id: 5,
    image: require("../../assets/edith.png"),
    name: "Edith Nkay",
    number: "0123456789 - Opay",
  },
  {
    id: 6,
    image: require("../../assets/ally.png"),
    name: "Ally Lawal",
    number: "0123456789 - Opay",
  },
  {
    id: 7,
    image: require("../../assets/udon.png"),
    name: "Ufot Ubon",
    number: "0123456789 - Opay",
  },
  {
    id: 8,
    image: require("../../assets/udon.png"),
    name: "Ufot Ubon",
    number: "0123456789 - Opay",
  },
  {
    id: 9,
    image: require("../../assets/white.png"),
    name: "Davio White",
    number: "0123456789 - Opay",
  },
  {
    id: 10,
    image: require("../../assets/dr.png"),
    name: "Dr. Omotola",
    number: "0123456789 - Opay",
  },
  {
    id: 11,
    image: require("../../assets/leye.png"),
    name: "Leye Connect",
    number: "0123456789 - Opay",
  },
  {
    id: 12,
    image: require("../../assets/edith.png"),
    name: "Edith Nkay",
    number: "0123456789 - Opay",
  },
];

export default function BeggersScreen() {
  function Begger({ item }) {
    const { name, number, image } = item;
    return (
      <View style={styles.begger}>
        <View style={styles.beggerInfo}>
          <Image source={image} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.number}>{number}</Text>
          </View>
        </View>
        <Image
          source={require("../../assets/arrow-left.png")}
          style={styles.arrow}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={beggers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Begger item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  begger: {
    flexDirection: "row",
    alignItems: "center",
    width: SCREEN_WIDTH * 0.9,
    marginVertical: 3,
    padding: 20,
    justifyContent: "space-between",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  iOSShadow: {
    shadowRadius: 1,
    shadowColor: "#2e404414",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
  },
  androidShadow: {
    elevation: 20,
  },
  beggerInfo: {
    flexDirection: "row",
    gap: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  number: {
    fontSize: 14,
    fontWeight: "500",
    opacity: 0.5,
  },
  arrow: {
    height: 20,
    width: 20,
  },
});
