import { BLACK, GRAY, PRIMARY } from "@/constants/Colors";
import PropTypes, { checkPropTypes } from "prop-types";
import { useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  title: string;
  placeholder: string;
  keyboardType: any;
  returnKeyType: any;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

export const KeyboardTypes = {
  DEFAULT: "default",
  EMAIL: "email-address",
  URL: "url",
  TELNUMBER: "phone-pad",
};

export const ReturnKeyTypes = {
  DONE: "done",
  NEXT: "next",
};

const Input = ({
  title,
  placeholder,
  keyboardType,
  returnKeyType,
  secureTextEntry,
  value,
  onChangeText,
}: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          value && styles.hasValueTitle,
          isFocused && styles.focusedTitle,
        ]}
      >
        {title}
      </Text>
      <TextInput
        style={[
          styles.input,
          value && styles.hasValueInput,
          isFocused && styles.focusedInput,
        ]}
        placeholder={placeholder ?? title}
        placeholderTextColor={GRAY.DEFAULT}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        textContentType="none"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

Input.propeTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.oneOf(Object.values(KeyboardTypes)),
  returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
  secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  focusedTitle: {
    fontWeight: "700",
    color: PRIMARY.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GRAY.DEFAULT,
    paddingHorizontal: 10,
    height: 42,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
});

export default Input;
