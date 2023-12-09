import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../Constants/Dimensions";

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          height: SCREEN_HEIGHT * 0.3,
        }}
      >
        <ImageBackground
          source={require("../../assets/shape1.png")}
          resizeMode="stretch"
          style={styles.imageBg}
        >
          <View style={styles.profileInfo}>
            <Image
              source={require("../../assets/dp.png")}
              style={styles.image}
            />
            <Text style={styles.name}>Sapa General</Text>
            <Text style={styles.account}>Account number - 0123456789</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.value}>N2,000</Text>
          <Text style={styles.title}>Wallet balance</Text>
        </View>
        <View style={[styles.stat, styles.middleStat]}>
          <Text style={styles.value}>27</Text>
          <Text style={styles.title}>Beggings</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.value}>36</Text>
          <Text style={styles.title}>Givings</Text>
        </View>
      </View>

      <View
        style={{
          marginVertical: 15,
        }}
      >
        <View style={styles.other}>
          <View style={styles.otherCon}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M7.00049 7.49951C7.00049 4.74251 9.24349 2.49951 12.0005 2.49951C14.7575 2.49951 17.0005 4.74251 17.0005 7.49951C17.0005 10.2565 14.7575 12.4995 12.0005 12.4995C9.24349 12.4995 7.00049 10.2565 7.00049 7.49951ZM16.1175 13.5706C15.5585 13.4286 14.9505 13.5086 14.4475 13.7886C12.9295 14.6326 11.0715 14.6326 9.55347 13.7886C9.05147 13.5096 8.44248 13.4306 7.88348 13.5706C5.89148 14.0736 4.50049 15.8816 4.50049 17.9666V18.9775C4.50049 19.6155 4.67047 20.2394 4.99347 20.7834C5.25647 21.2254 5.7495 21.5005 6.2785 21.5005H17.7215C18.2505 21.5005 18.7435 21.2265 19.0065 20.7825C19.3295 20.2395 19.4995 19.6155 19.4995 18.9775V17.9666C19.5005 15.8816 18.1095 14.0736 16.1175 13.5706Z"
                fill="#03525F"
              />
            </Svg>
            <Text style={styles.otherTitle}>Account details</Text>
          </View>
          <Image
            source={require("../../assets/arrow-left.png")}
            style={styles.arrow}
          />
        </View>
        <View style={styles.other}>
          <View style={styles.otherCon}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M17 4.5H7C4.52 4.5 2.5 6.52 2.5 9H21.5C21.5 6.52 19.48 4.5 17 4.5ZM2.5 11V15C2.5 17.48 4.52 19.5 7 19.5H17C19.48 19.5 21.5 17.48 21.5 15V11H2.5ZM10 16H7C6.45 16 6 15.55 6 15C6 14.45 6.45 14 7 14H10C10.55 14 11 14.45 11 15C11 15.55 10.55 16 10 16Z"
                fill="#03525F"
              />
            </Svg>
            <Text style={styles.otherTitle}>Top up account</Text>
          </View>
          <Image
            source={require("../../assets/arrow-left.png")}
            style={styles.arrow}
          />
        </View>
        <View style={styles.other}>
          <View style={styles.otherCon}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M20.33 9.78H20.3C20.0616 9.77859 19.8289 9.7066 19.6314 9.57313C19.4339 9.43965 19.2803 9.25066 19.19 9.03C19.19 9.02735 19.1889 9.0248 19.1871 9.02293C19.1852 9.02105 19.1827 9.02 19.18 9.02C19.091 8.80005 19.0683 8.55891 19.1144 8.32619C19.1606 8.09347 19.2738 7.8793 19.44 7.71L19.47 7.68C19.7822 7.36663 19.9574 6.94232 19.9574 6.5C19.9574 6.05768 19.7822 5.63337 19.47 5.32L18.68 4.54C18.3666 4.22783 17.9423 4.05256 17.5 4.05256C17.0577 4.05256 16.6334 4.22783 16.32 4.54L16.31 4.56C16.1368 4.72681 15.9187 4.83935 15.6824 4.88377C15.4461 4.92819 15.2019 4.90255 14.98 4.81C14.7563 4.72301 14.5641 4.57051 14.4285 4.37246C14.2928 4.1744 14.2202 3.94003 14.22 3.7V3.67C14.2208 3.45131 14.1785 3.23461 14.0954 3.0323C14.0124 2.82998 13.8903 2.64601 13.7362 2.49091C13.582 2.33581 13.3988 2.21262 13.1969 2.12838C12.9951 2.04415 12.7787 2.00052 12.56 2H11.44C11.2213 2.00052 11.0049 2.04415 10.8031 2.12838C10.6012 2.21262 10.418 2.33581 10.2638 2.49091C10.1097 2.64601 9.98758 2.82998 9.90456 3.0323C9.82154 3.23461 9.77921 3.45131 9.78 3.67V3.7C9.77952 3.93862 9.7079 4.17168 9.57431 4.3694C9.44072 4.56712 9.25121 4.72052 9.03 4.81C8.87906 4.87748 8.71533 4.91159 8.55 4.91C8.39227 4.91039 8.23601 4.87967 8.09016 4.81962C7.94431 4.75956 7.81173 4.67134 7.7 4.56L7.68 4.54C7.36663 4.22783 6.94232 4.05256 6.5 4.05256C6.05768 4.05256 5.63337 4.22783 5.32 4.54L4.53 5.32C4.21783 5.63337 4.04256 6.05768 4.04256 6.5C4.04256 6.94232 4.21783 7.36663 4.53 7.68L4.56 7.71C4.7276 7.88055 4.84125 8.09669 4.88675 8.33143C4.93226 8.56618 4.9076 8.80913 4.81586 9.02995C4.72412 9.25076 4.56936 9.43966 4.37091 9.57306C4.17246 9.70645 3.93911 9.77843 3.7 9.78H3.67C3.22733 9.78079 2.80302 9.95699 2.49001 10.27C2.17699 10.583 2.00079 11.0073 2 11.45V12.56C2.00079 13.0027 2.17699 13.427 2.49001 13.74C2.80302 14.053 3.22733 14.2292 3.67 14.23H3.7C3.93918 14.228 4.17332 14.2987 4.37151 14.4326C4.56969 14.5665 4.72259 14.7574 4.81 14.98C4.90064 15.2023 4.92527 15.4459 4.88092 15.6818C4.83658 15.9177 4.72516 16.1358 4.56 16.31L4.54 16.32C4.2277 16.6353 4.05251 17.0612 4.05251 17.505C4.05251 17.9488 4.2277 18.3747 4.54 18.69L5.32 19.47C5.63337 19.7822 6.05768 19.9574 6.5 19.9574C6.94232 19.9574 7.36663 19.7822 7.68 19.47L7.7 19.45C7.86699 19.2801 8.08127 19.1645 8.31492 19.1181C8.54858 19.0717 8.79079 19.0968 9.01 19.19C9.23543 19.2786 9.42921 19.4326 9.56643 19.6321C9.70364 19.8317 9.77802 20.0678 9.78 20.31V20.34C9.77947 20.5581 9.82205 20.7742 9.90529 20.9759C9.98852 21.1775 10.1108 21.3607 10.265 21.515C10.4193 21.6692 10.6025 21.7915 10.8041 21.8747C11.0058 21.958 11.2219 22.0005 11.44 22H12.56C12.7781 22.0005 12.9942 21.958 13.1959 21.8747C13.3975 21.7915 13.5807 21.6692 13.735 21.515C13.8892 21.3607 14.0115 21.1775 14.0947 20.9759C14.1779 20.7742 14.2205 20.5581 14.22 20.34V20.31C14.222 20.0678 14.2964 19.8317 14.4336 19.6321C14.5708 19.4326 14.7646 19.2786 14.99 19.19C15.2092 19.0968 15.4514 19.0717 15.6851 19.1181C15.9187 19.1645 16.133 19.2801 16.3 19.45L16.32 19.47C16.6334 19.7822 17.0577 19.9574 17.5 19.9574C17.9423 19.9574 18.3666 19.7822 18.68 19.47L19.46 18.69C19.7723 18.3747 19.9475 17.9488 19.9475 17.505C19.9475 17.0612 19.7723 16.6353 19.46 16.32L19.44 16.31C19.2748 16.1358 19.1634 15.9177 19.1191 15.6818C19.0747 15.4459 19.0994 15.2023 19.19 14.98C19.2774 14.7574 19.4303 14.5665 19.6285 14.4326C19.8267 14.2987 20.0608 14.228 20.3 14.23H20.33C20.7727 14.2292 21.197 14.053 21.51 13.74C21.823 13.427 21.9992 13.0027 22 12.56V11.45C21.9992 11.0073 21.823 10.583 21.51 10.27C21.197 9.95699 20.7727 9.78079 20.33 9.78ZM12 15.5C11.3078 15.5 10.6311 15.2947 10.0555 14.9101C9.47993 14.5256 9.03133 13.9789 8.76642 13.3394C8.50151 12.6999 8.4322 11.9961 8.56725 11.3172C8.7023 10.6383 9.03564 10.0146 9.52513 9.52513C10.0146 9.03564 10.6383 8.7023 11.3172 8.56725C11.9961 8.4322 12.6999 8.50151 13.3394 8.76642C13.9789 9.03133 14.5256 9.47993 14.9101 10.0555C15.2947 10.6311 15.5 11.3078 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5Z"
                fill="#03525F"
              />
            </Svg>
            <Text style={styles.otherTitle}>User settings</Text>
          </View>
          <Image
            source={require("../../assets/arrow-left.png")}
            style={styles.arrow}
          />
        </View>
        <View style={styles.other}>
          <View style={styles.otherCon}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M15 2.5H9C5.42 2.5 2.5 5.42 2.5 9V15C2.5 18.58 5.42 21.5 9 21.5H15C18.58 21.5 21.5 18.58 21.5 15V9C21.5 5.42 18.58 2.5 15 2.5ZM15.71 14.29C16.1 14.68 16.1 15.32 15.71 15.71C15.51 15.9 15.26 16 15 16C14.74 16 14.49 15.9 14.29 15.71L12 13.4199L9.71002 15.71C9.51002 15.9 9.26 16 9 16C8.74 16 8.48998 15.9 8.28998 15.71C7.89998 15.32 7.89998 14.68 8.28998 14.29L10.58 12L8.28998 9.70996C7.89998 9.31996 7.89998 8.68004 8.28998 8.29004C8.67998 7.90004 9.32002 7.90004 9.71002 8.29004L12 10.5801L14.29 8.29004C14.68 7.90004 15.32 7.90004 15.71 8.29004C16.1 8.68004 16.1 9.31996 15.71 9.70996L13.42 12L15.71 14.29Z"
                fill="#03525F"
              />
            </Svg>
            <Text style={styles.otherTitle}>Deactivate account</Text>
          </View>
          <Image
            source={require("../../assets/arrow-left.png")}
            style={styles.arrow}
          />
        </View>
        <View style={[styles.other, styles.logOutCon]}>
          <View style={styles.otherCon}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M13 21C13 21.553 12.552 22 12 22H8C5.243 22 3 19.757 3 17V7C3 4.243 5.243 2 8 2H12C12.552 2 13 2.447 13 3C13 3.553 12.552 4 12 4H8C6.346 4 5 5.346 5 7V17C5 18.654 6.346 20 8 20H12C12.553 20 13 20.447 13 21ZM20.707 11.293L16.707 7.29297C16.316 6.90197 15.684 6.90197 15.293 7.29297C14.902 7.68397 14.902 8.31603 15.293 8.70703L17.586 11H10C9.448 11 9 11.447 9 12C9 12.553 9.448 13 10 13H17.586L15.293 15.293C14.902 15.684 14.902 16.316 15.293 16.707C15.488 16.902 15.744 17 16 17C16.256 17 16.512 16.902 16.707 16.707L20.707 12.707C21.098 12.316 21.098 11.683 20.707 11.293Z"
                fill="#FF0F0F"
              />
            </Svg>
            <Text style={[styles.otherTitle, styles.logOut]}>Log out</Text>
          </View>
          <Image
            source={require("../../assets/arrow-left-red.png")}
            style={styles.arrow}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {},
  profileInfo: {
    marginTop: SCREEN_HEIGHT * 0.18,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 24,
  },
  account: {
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.5,
  },
  stats: {
    backgroundColor: "#03515D",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 25,
    borderRadius: 12,
    marginHorizontal: SCREEN_WIDTH * 0.05,
  },
  value: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  title: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "400",
  },
  middleStat: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#fff",
  },
  stat: {
    paddingHorizontal: 25,
  },
  other: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: SCREEN_WIDTH * 0.05,
    justifyContent: "space-between",
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 5,
  },
  otherCon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  otherTitle: {
    fontSize: 16,
    fontWeight: "400",
  },
  logOut: {
    color: "red",
  },
  logOutCon: {
    marginVertical: 20,
  },
});
