import { BLACK, GRAY, PRIMARY } from "@/constants/Colors";
import PropTypes from "prop-types";
import { forwardRef, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  placeholder: string;
  keyboardType: any;
  returnKeyType: any;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  iconName: string;
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

export const IconNames = {
  EMAIL: "email",
  PASSWORD: "lock",
};

const Input = forwardRef(
  ({ title, placeholder, value, iconName, ...props }: Props, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isValue, setIsValue] = useState<boolean>(false);

    useEffect(() => {
      if (value) {
        setIsValue(true);
      } else {
        setIsValue(false);
      }
    }, [value]);

    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            isValue && styles.hasValueTitle,
            isFocused && styles.focusedTitle,
          ]}
        >
          {title}
        </Text>
        <TextInput
          {...props}
          ref={ref}
          style={[
            styles.input,
            isValue && styles.hasValueInput,
            isFocused && styles.focusedInput,
          ]}
          placeholder={placeholder ?? title}
          placeholderTextColor={GRAY.DEFAULT}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          keyboardAppearance="light"
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            color={(() => {
              switch (true) {
                case isFocused:
                  return PRIMARY.DEFAULT;
                case isValue:
                  return BLACK;
                default:
                  return GRAY.DEFAULT;
              }
            })()}
          />
        </View>
      </View>
    );
  }
);

Input.defalutProps = {
  keyboardType: KeyboardTypes.DEFAULT,
  returnKeyType: ReturnKeyTypes.DONE,
};

Input.propeTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  iconName: PropTypes.oneOf(Object.values(IconNames)),
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
    paddingLeft: 30,
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
  icon: {
    position: "absolute",
    left: 28,
    top: 10,
    height: "100%",
    justifyContent: "center",
  },
});

export default Input;
