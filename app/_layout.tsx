import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { GRAY, PRIMARY, WHITE } from "@/constants/Colors";
import SignInScreen from "@/screen/SignInScreen";
import ListScreen from "@/screen/ListScreen";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          contentStyle: { backgroundColor: WHITE },
          headerShown: false,
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
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
