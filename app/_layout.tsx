import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import SignInScreen from "@/screen/SignInScreen";
import ListScreen from "@/screen/ListScreen";
import { GRAY, PRIMARY, WHITE } from "@/constants/Colors";
import { Image, Pressable, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import HeaderLeftButton from "@/components/HeaderLeftButton";
import HeaderRightButton from "@/components/HeaderRightButton";
import SettingScreen from "@/screen/SettingScreen";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          contentStyle: { backgroundColor: WHITE },
          headerShown: false,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            contentStyle: { backgroundColor: "lavender", borderRadius: 50 },
          }}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            title: "할 일 목록",
            headerShown: true,
            headerTitleAlign: "center",
            headerTintColor: PRIMARY.DEFAULT,
            headerTitleStyle: {
              fontWeight: "700",
              color: "lightcoral",
            },

            headerRight: HeaderRightButton,
            headerLeft: (props) => HeaderLeftButton({ ...props }),

            headerTitle: () => {
              return (
                <Pressable onPress={() => console.log("")}>
                  <Image
                    style={{ height: 40, resizeMode: "contain" }}
                    source={require("@/assets/images/react-logo.png")}
                  />
                </Pressable>
              );
            },
          }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: "할 일 목록",
            headerShown: true,
            headerTitleAlign: "center",
            headerTintColor: PRIMARY.DEFAULT,
            headerTitleStyle: {
              fontWeight: "700",
              color: "lightcoral",
            },
            headerLeft: (props) => HeaderLeftButton({ ...props }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
