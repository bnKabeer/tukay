import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../Constants/Dimensions";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";

export default function SignUpScreen() {
  const { setToken } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require("../../assets/welcomeSvg.svg")}
        resizeMode="stretch"
        style={styles.imageBg}
      >
        <View>
          <View
            style={{
              marginTop: SCREEN_HEIGHT * 0.1,
            }}
          >
            <View style={styles.headingCon}>
              <Text style={styles.heading}>Sign up</Text>
              <Text style={styles.headline}>
                Enter personal details below to {"\n"} create an account.
              </Text>
            </View>
            <View>
              <Input
                inputConfig={{
                  placeholder: "Enter full name",
                }}
              >
                {"Full name"}
              </Input>
              <Input
                inputConfig={{
                  placeholder: "Enter email",
                }}
              >
                {"Email address"}
              </Input>
              <Input
                inputConfig={{
                  placeholder: "Enter phone number",
                }}
              >
                {"Phone number"}
              </Input>
            </View>
            <View style={styles.logInHere}>
              <Button
                onPress={() => {
                  setToken("token");
                }}
              >
                Register now
              </Button>
              <Pressable onPress={() => navigation.navigate("LogIn")}>
                <Text style={styles.instead}>Log in here</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.separator}>
        <View style={styles.line}></View>
        <View>
          <Text>Or register with</Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.otherServices}>
        <View style={styles.service}>
          <Image
            source={require("../../assets/logos_facebook.png")}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceTitle}>Facebook</Text>
        </View>
        <View style={styles.service}>
          <Image source={require("../../assets/logos_google-gmail.png")} />
          <Text style={styles.serviceTitle}>Gmail</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.75,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "700",
    lineHeight: 24,
  },
  headingCon: {
    alignItems: "center",
    gap: 5,
  },
  headline: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    fontWeight: "400",
    lineHeight: 24,
  },
  logInHere: {
    marginTop: SCREEN_HEIGHT * 0.03,
    alignItems: "center",
    gap: 10,
  },
  instead: {
    color: "#D6F904",
    padding: 15,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    textDecorationLine: "underline",
  },
  separator: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: SCREEN_WIDTH * 0.05,
    marginVertical: SCREEN_HEIGHT * 0.02,
    width: SCREEN_WIDTH * 0.9,
    gap: 8,
  },
  line: {
    height: 2,
    backgroundColor: "#D2D2D2",
    width: SCREEN_WIDTH * 0.3,
  },
  otherServices: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  service: {
    flexDirection: "row",
    gap: 5,
    backgroundColor: "#fff",
    padding: SCREEN_HEIGHT * 0.02,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH / 3,
    borderRadius: 8,
    height: SCREEN_HEIGHT * 0.07,
  },
  serviceImage: {
    width: 24,
    height: 24,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
});
