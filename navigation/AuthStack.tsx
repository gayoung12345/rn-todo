import ListScreen from "@/screen/ListScreen";
import SignInScreen from "@/screen/SignInScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="List" component={ListScreen} />
  </Stack.Navigator>;
};

export default AuthStack;
