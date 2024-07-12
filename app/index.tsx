import AuthStack from "@/navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";

const index = () => {
  return (
    <NavigationContainer independent={true}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default index;
