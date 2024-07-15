import { useEffect, useRef, useState } from "react";
import { Alert, Image, Keyboard, StyleSheet, View } from "react-native";
import signIn from "@/api/auth";
import PropTypes from "prop-types";
import SafeInputView from "@/components/SafeInputView";
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from "@/components/Input";
import Button from "@/components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignInScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!isLoading && !disabled) {
      setIsLoading(true); // 요청 전에 로딩 상태를 true로 설정합니다.
      try {
        Keyboard.dismiss();
        const data = await signIn(email, password);
        navigation.navigate("List");
      } catch (e) {
        Alert.alert(
          "로그인 실패",
          e.message || "알 수 없는 오류가 발생했습니다.",
          [{ text: "확인", onPress: () => {} }]
        );
      } finally {
        setIsLoading(false); // 요청 완료 후 로딩 상태를 false로 설정합니다.
      }
    }
  };

  return (
    <SafeInputView>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Image
          source={require("../assets/images/main.png")}
          style={styles.image}
        />
        <Input
          title="이메일"
          placeholder="e-mail 주소를 입력하세요"
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
          placeholder="비밀번호 입력"
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry={true}
          value={password}
          onChangeText={(password: string) => setPassword(password.trim())}
          iconName={IconNames.PASSWORD}
        />

        {/* 로그인버튼 */}
        <View style={styles.buttonContainer}>
          <Button
            title="로그인"
            onPress={onSubmit}
            disabled={disabled}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeInputView>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxHeight: 200,
    height: "10%",
    resizeMode: "contain",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 20,
  },
});

export default SignInScreen;
