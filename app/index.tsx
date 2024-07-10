import Input, { KeyboardTypes, ReturnKeyTypes } from "@/components/Input";
import SafeInputView from "@/components/SafeInputView";
import { WHITE } from "@/constants/Colors";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const index = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  console.log(email, password);

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/main.png")}
          style={styles.image}
        />
        <Text>SignIn</Text>
        <Input
          title="이메일"
          placeholder="test@email.com"
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          value={email}
          onChangeText={(email: string) => setEmail(email.trim())}
        />
        <Input
          title="비밀번호"
          placeholder="비밀번호를 입력하세요."
          keyboardType={KeyboardTypes.DEFAULT}
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry
          value={password}
          onChangeText={(password: string) => setPassword(password.trim())}
        />
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: WHITE,
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default index;

// db = (px * 160) / ppi
// px = dp * ppi / 160;
