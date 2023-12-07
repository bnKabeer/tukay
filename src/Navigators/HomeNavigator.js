import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import HomeScreen from "../screens/HomeScreen";
import WalletScreen from "../screens/WalletScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MainScreen from "../screens/MainScreen";
import TransfersNavigator from "./TransfersNavigator";

const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#03515D",
          marginHorizontal: 10,
          marginBottom: 20,
          borderRadius: 12,
          position: "absolute",
          height: 80,
        },
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarBackground: () => {
          <LinearGradient colors={["red", "#3b5998", "#192f6a"]} />;
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size}
              viewBox="0 0 20 20"
              fill="none"
            >
              <Path
                d="M17.3581 6.67498L11.8998 2.30831C10.8331 1.45831 9.16647 1.44997 8.10814 2.29997L2.64981 6.67498C1.86647 7.29998 1.39147 8.54997 1.55814 9.53331L2.60814 15.8166C2.84981 17.225 4.15814 18.3333 5.58314 18.3333H14.4165C15.8248 18.3333 17.1581 17.2 17.3998 15.8083L18.4498 9.52497C18.5998 8.54997 18.1248 7.29998 17.3581 6.67498ZM10.6248 15C10.6248 15.3416 10.3415 15.625 9.99981 15.625C9.65814 15.625 9.37481 15.3416 9.37481 15V12.5C9.37481 12.1583 9.65814 11.875 9.99981 11.875C10.3415 11.875 10.6248 12.1583 10.6248 12.5V15Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Transfers"
        component={TransfersNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <Path
                d="M17.5861 2.41425C16.9486 1.77675 16.0469 1.52593 15.1694 1.7451L4.24194 4.47673C2.69027 4.86423 1.65527 6.1993 1.6661 7.79847C1.67777 9.39763 2.7311 10.7185 4.28776 11.0843L8.03359 11.9658L8.91525 15.711C9.28108 17.2685 10.602 18.3218 12.2011 18.3326C12.2095 18.3326 12.2186 18.3326 12.2269 18.3326C13.8144 18.3326 15.1378 17.3009 15.5244 15.7576L18.2561 4.82921C18.4744 3.95587 18.2244 3.05258 17.5861 2.41425ZM16.6386 4.4276L13.907 15.3551C13.6628 16.3301 12.8703 16.6959 12.2128 16.6676C11.5536 16.6626 10.7678 16.3092 10.5378 15.3309L9.64441 11.535L13.0894 8.09093C13.4153 7.76509 13.4153 7.23837 13.0894 6.91254C12.7636 6.58671 12.2369 6.58671 11.9111 6.91254L8.46608 10.3568L4.67025 9.4634C3.69192 9.2334 3.33775 8.44756 3.33358 7.7884C3.32941 7.12923 3.67196 6.33843 4.64696 6.09426L15.5744 3.36263C15.6536 3.34347 15.7277 3.33507 15.7969 3.33507C16.1102 3.33507 16.3219 3.5076 16.4086 3.59426C16.5127 3.69926 16.7478 3.99176 16.6386 4.4276Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <Path
                d="M11.6688 14.3788H14.3813C15.8732 14.3788 17.3039 14.9714 18.3588 16.0263C19.4137 17.0812 20.0063 18.5119 20.0063 20.0038H11.2551V21.2538H21.2551V20.0038C21.2515 18.6739 20.8677 17.3727 20.1488 16.2538H23.7563C24.9379 16.2535 26.0954 16.5881 27.0945 17.2188C28.0936 17.8496 28.8935 18.7507 29.4013 19.8175C26.4451 23.7188 21.6588 26.2538 16.2563 26.2538C12.8051 26.2538 9.88135 25.5163 7.50635 24.2225V12.5925C9.02701 12.81 10.4631 13.4258 11.6688 14.3775V14.3788ZM6.25635 23.7538C6.25635 24.0853 6.12465 24.4032 5.89023 24.6377C5.65581 24.8721 5.33787 25.0038 5.00635 25.0038H2.50635C2.17483 25.0038 1.85688 24.8721 1.62246 24.6377C1.38804 24.4032 1.25635 24.0853 1.25635 23.7538V12.5038C1.25635 12.1723 1.38804 11.8543 1.62246 11.6199C1.85688 11.3855 2.17483 11.2538 2.50635 11.2538H5.00635C5.33787 11.2538 5.65581 11.3855 5.89023 11.6199C6.12465 11.8543 6.25635 12.1723 6.25635 12.5038V23.7538ZM22.5063 6.25378C22.9988 6.25378 23.4864 6.35078 23.9414 6.53924C24.3964 6.72769 24.8098 7.00391 25.158 7.35213C25.5062 7.70035 25.7824 8.11375 25.9709 8.56872C26.1594 9.02369 26.2563 9.51133 26.2563 10.0038C26.2563 10.4962 26.1594 10.9839 25.9709 11.4388C25.7824 11.8938 25.5062 12.3072 25.158 12.6554C24.8098 13.0037 24.3964 13.2799 23.9414 13.4683C23.4864 13.6568 22.9988 13.7538 22.5063 13.7538C21.5118 13.7538 20.558 13.3587 19.8547 12.6554C19.1514 11.9522 18.7563 10.9983 18.7563 10.0038C18.7563 9.00922 19.1514 8.0554 19.8547 7.35213C20.558 6.64887 21.5118 6.25378 22.5063 6.25378ZM13.7563 2.50378C14.2488 2.50378 14.7364 2.60078 15.1914 2.78924C15.6464 2.97769 16.0598 3.25391 16.408 3.60213C16.7562 3.95035 17.0324 4.36375 17.2209 4.81872C17.4094 5.27369 17.5063 5.76133 17.5063 6.25378C17.5063 6.74624 17.4094 7.23388 17.2209 7.68885C17.0324 8.14382 16.7562 8.55722 16.408 8.90544C16.0598 9.25365 15.6464 9.52988 15.1914 9.71833C14.7364 9.90679 14.2488 10.0038 13.7563 10.0038C12.7618 10.0038 11.808 9.6087 11.1047 8.90544C10.4014 8.20217 10.0063 7.24835 10.0063 6.25378C10.0063 5.25922 10.4014 4.3054 11.1047 3.60213C11.808 2.89887 12.7618 2.50378 13.7563 2.50378Z"
                fill="#00555E"
              />
            </Svg>
          ),
          tabBarIconStyle: {
            width: 70,
            height: 70,
            borderWidth: 4,
            borderColor: "#fff",
            borderRadius: 1000,
            position: "absolute",
            top: -35,
            backgroundColor: "#D6FB00",
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <Path
                d="M10.8335 7.5H5.8335"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M18.3333 9.14159V10.8583C18.3333 11.3166 17.9667 11.6916 17.5 11.7083H15.8667C14.9667 11.7083 14.1417 11.0499 14.0667 10.1499C14.0167 9.62494 14.2167 9.13327 14.5667 8.79161C14.875 8.47494 15.3 8.29163 15.7667 8.29163H17.5C17.9667 8.30829 18.3333 8.68326 18.3333 9.14159Z"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M1.6665 7.08329C1.6665 4.81663 3.03317 3.23329 5.15817 2.96662C5.37484 2.93329 5.59984 2.91663 5.83317 2.91663H13.3332C13.5498 2.91663 13.7582 2.92495 13.9582 2.95828C16.1082 3.20828 17.4998 4.79996 17.4998 7.08329V8.29164H15.7665C15.2998 8.29164 14.8748 8.47495 14.5665 8.79162C14.2165 9.13328 14.0165 9.62495 14.0665 10.15C14.1415 11.05 14.9665 11.7083 15.8665 11.7083H17.4998V12.9166C17.4998 15.4166 15.8332 17.0833 13.3332 17.0833H5.83317C3.33317 17.0833 1.6665 15.4166 1.6665 12.9166V10.2166"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <Path
                d="M10.1331 9.05829C10.0498 9.04996 9.9498 9.04996 9.85814 9.05829C7.8748 8.99163 6.2998 7.36663 6.2998 5.36663C6.2998 3.32496 7.9498 1.66663 9.9998 1.66663C12.0415 1.66663 13.6998 3.32496 13.6998 5.36663C13.6915 7.36663 12.1165 8.99163 10.1331 9.05829Z"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M5.9666 12.1334C3.94993 13.4834 3.94993 15.6834 5.9666 17.025C8.25827 18.5584 12.0166 18.5584 14.3083 17.025C16.3249 15.675 16.3249 13.475 14.3083 12.1334C12.0249 10.6084 8.2666 10.6084 5.9666 12.1334Z"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
