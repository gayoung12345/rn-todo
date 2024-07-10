import PropTypes from "prop-types";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";

type Prop = {
  children: React.ReactNode;
};

const SafeInputView = ({ children }: Prop) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding" })}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={
          () => console.log("touch")
          // Keyboard.dismiss()
        }
      >
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

SafeInputView.propTypes = {
  children: PropTypes.node,
};

export default SafeInputView;
