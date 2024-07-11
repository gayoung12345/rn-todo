import Button from "@/components/Button";
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from "@/components/Input";
import SafeInputView from "@/components/SafeInputView";
import { WHITE } from "@/constants/Colors";
import { useEffect, useRef, useState } from "react";
import { Image, Keyboard, StyleSheet, Text, View } from "react-native";

const index = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    try {
      Keyboard.dismiss();
      const data = await singIn(email, password);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(email, password);

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
          iconName={IconNames.EMAIL}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          title="비밀번호"
          placeholder="비밀번호를 입력하세요."
          keyboardType={KeyboardTypes.DEFAULT}
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry
          value={password}
          onChangeText={(password: string) => setPassword(password.trim())}
          iconName={IconNames.PASSWORD}
        />
        {/* login btn */}
        <View style={styles.buttonContainer}>
          <Button title="로그인" onPress={onSubmit} disabled={disabled} />
        </View>
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
    maxWidth: 200,
    maxHeight: 200,
    width: "10%",
    height: "10%",
    resizeMode: "contain",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 20,
  },
});
export default index;

// db = (px * 160) / ppi
// px = dp * ppi / 160;
