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
import Svg, { Path } from "react-native-svg";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";

export default function LogInScreen() {
  const navigation = useNavigation();
  const { setToken } = useContext(AuthContext);
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
              <Text style={styles.heading}>Log in</Text>
              <Text style={styles.headline}>
                Enter account credentials to log into {"\n"} your account.
              </Text>
            </View>
            <View>
              <Input
                inputConfig={{
                  placeholder: "Enter account name",
                }}
              >
                {"Account name"}
              </Input>
              <Input
                inputConfig={{
                  placeholder: "Enter Password",
                }}
              >
                {"Password"}
              </Input>
            </View>
            <View style={styles.logInHere}>
              <Button
                onPress={() => {
                  setToken("token");
                }}
              >
                Log in
              </Button>
              <Pressable onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.instead}>Sign up here</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.separator}>
        <View style={styles.line}></View>
        <View>
          <Text>Or log in with</Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.otherServices}>
        <View style={styles.service}>
          <View style={styles.svg}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M12 22.9543C13.1256 22.9543 14.2402 22.7326 15.2802 22.3018C16.3201 21.8711 17.265 21.2397 18.0609 20.4438C18.8569 19.6478 19.4882 18.7029 19.919 17.663C20.3497 16.6231 20.5714 15.5085 20.5714 14.3829V9.61714C20.5716 7.51146 19.7966 5.4794 18.3943 3.90857M3.42859 11.52V14.3829C3.42801 16.0702 3.92548 17.7202 4.85864 19.126C5.7918 20.5319 7.11914 21.631 8.6743 22.2857M16.2857 2.19428C14.3171 1.05769 11.9775 0.749678 9.78174 1.338C7.58598 1.92633 5.71384 3.3628 4.57716 5.33142C4.10912 6.13976 3.7789 7.02037 3.60002 7.93714"
                stroke="#03525F"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M11.1086 6.01714C11.7391 5.88624 12.3909 5.89853 13.0161 6.05311C13.6412 6.20768 14.2237 6.50059 14.7205 6.91025C15.2174 7.3199 15.6159 7.83585 15.8868 8.42005C16.1577 9.00425 16.294 9.64181 16.2857 10.2857V13.0457M15.1886 16.6457C14.6053 17.2954 13.8375 17.7515 12.9879 17.9529C12.1383 18.1542 11.2475 18.0913 10.4346 17.7725C9.6218 17.4537 8.92572 16.8943 8.43956 16.169C7.9534 15.4437 7.70035 14.5873 7.71429 13.7143V10.2857C7.71103 9.69693 7.82769 9.11366 8.05715 8.57143M12 10.4743V13.3371"
                stroke="#03525F"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </View>
          <Text style={styles.serviceTitle}>Facebook</Text>
        </View>
        <View style={styles.service}>
          <View style={styles.svg}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M11 13.75H12V9.75M16 9.5V8M9.00001 16.5C10.5 18 13.5 18 15 16.5M8.00001 9.5V8M7.50001 20.886C6.03701 20.742 5.05301 20.416 4.31801 19.682C3.58301 18.947 3.25801 17.962 3.11401 16.5M7.50001 3.114C6.03701 3.258 5.05301 3.584 4.31801 4.318C3.58301 5.053 3.25801 6.038 3.11401 7.5M16.5 3.114C17.963 3.258 18.947 3.584 19.682 4.318C20.417 5.053 20.742 6.038 20.886 7.5M16.5 20.886C17.963 20.742 18.947 20.416 19.682 19.682C20.417 18.947 20.742 17.962 20.886 16.5"
                stroke="#03525F"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </View>
          <Text style={styles.serviceTitle}>Gmail</Text>
        </View>
        <View style={styles.service}>
          <View style={styles.svg}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M12 19C11.4696 19 10.9609 19.2107 10.5858 19.5858C10.2107 19.9609 10 20.4696 10 21C10 21.5304 10.2107 22.0391 10.5858 22.4142C10.9609 22.7893 11.4696 23 12 23C12.5304 23 13.0391 22.7893 13.4142 22.4142C13.7893 22.0391 14 21.5304 14 21C14 20.4696 13.7893 19.9609 13.4142 19.5858C13.0391 19.2107 12.5304 19 12 19ZM6 1C5.46957 1 4.96086 1.21071 4.58579 1.58579C4.21071 1.96086 4 2.46957 4 3C4 3.53043 4.21071 4.03914 4.58579 4.41421C4.96086 4.78929 5.46957 5 6 5C6.53043 5 7.03914 4.78929 7.41421 4.41421C7.78929 4.03914 8 3.53043 8 3C8 2.46957 7.78929 1.96086 7.41421 1.58579C7.03914 1.21071 6.53043 1 6 1ZM6 7C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9C4 9.53043 4.21071 10.0391 4.58579 10.4142C4.96086 10.7893 5.46957 11 6 11C6.53043 11 7.03914 10.7893 7.41421 10.4142C7.78929 10.0391 8 9.53043 8 9C8 8.46957 7.78929 7.96086 7.41421 7.58579C7.03914 7.21071 6.53043 7 6 7ZM6 13C5.46957 13 4.96086 13.2107 4.58579 13.5858C4.21071 13.9609 4 14.4696 4 15C4 15.5304 4.21071 16.0391 4.58579 16.4142C4.96086 16.7893 5.46957 17 6 17C6.53043 17 7.03914 16.7893 7.41421 16.4142C7.78929 16.0391 8 15.5304 8 15C8 14.4696 7.78929 13.9609 7.41421 13.5858C7.03914 13.2107 6.53043 13 6 13ZM18 5C18.5304 5 19.0391 4.78929 19.4142 4.41421C19.7893 4.03914 20 3.53043 20 3C20 2.46957 19.7893 1.96086 19.4142 1.58579C19.0391 1.21071 18.5304 1 18 1C17.4696 1 16.9609 1.21071 16.5858 1.58579C16.2107 1.96086 16 2.46957 16 3C16 3.53043 16.2107 4.03914 16.5858 4.41421C16.9609 4.78929 17.4696 5 18 5ZM12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15C10 15.5304 10.2107 16.0391 10.5858 16.4142C10.9609 16.7893 11.4696 17 12 17C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C14 14.4696 13.7893 13.9609 13.4142 13.5858C13.0391 13.2107 12.5304 13 12 13ZM18 13C17.4696 13 16.9609 13.2107 16.5858 13.5858C16.2107 13.9609 16 14.4696 16 15C16 15.5304 16.2107 16.0391 16.5858 16.4142C16.9609 16.7893 17.4696 17 18 17C18.5304 17 19.0391 16.7893 19.4142 16.4142C19.7893 16.0391 20 15.5304 20 15C20 14.4696 19.7893 13.9609 19.4142 13.5858C19.0391 13.2107 18.5304 13 18 13ZM18 7C17.4696 7 16.9609 7.21071 16.5858 7.58579C16.2107 7.96086 16 8.46957 16 9C16 9.53043 16.2107 10.0391 16.5858 10.4142C16.9609 10.7893 17.4696 11 18 11C18.5304 11 19.0391 10.7893 19.4142 10.4142C19.7893 10.0391 20 9.53043 20 9C20 8.46957 19.7893 7.96086 19.4142 7.58579C19.0391 7.21071 18.5304 7 18 7ZM12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9C10 9.53043 10.2107 10.0391 10.5858 10.4142C10.9609 10.7893 11.4696 11 12 11C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9C14 8.46957 13.7893 7.96086 13.4142 7.58579C13.0391 7.21071 12.5304 7 12 7ZM12 1C11.4696 1 10.9609 1.21071 10.5858 1.58579C10.2107 1.96086 10 2.46957 10 3C10 3.53043 10.2107 4.03914 10.5858 4.41421C10.9609 4.78929 11.4696 5 12 5C12.5304 5 13.0391 4.78929 13.4142 4.41421C13.7893 4.03914 14 3.53043 14 3C14 2.46957 13.7893 1.96086 13.4142 1.58579C13.0391 1.21071 12.5304 1 12 1Z"
                fill="#03525F"
              />
            </Svg>
          </View>
          <Text style={styles.serviceTitle}>Gmail</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.7,
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
    marginHorizontal: SCREEN_WIDTH * 0.15,
    marginVertical: SCREEN_WIDTH * 0.028,
  },
  service: {
    gap: 5,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH / 3,
    height: SCREEN_HEIGHT * 0.07,
  },
  serviceImage: {
    width: 24,
    height: 24,
  },
  serviceTitle: {
    color: "#00000066",
    fontSize: 12,
    fontWeight: "400",
  },
  svg: {
    backgroundColor: "#fff",
    padding: 13,
    borderRadius: 8,
  },
});
