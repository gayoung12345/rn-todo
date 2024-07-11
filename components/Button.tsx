import { Pressable, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { Colors, PRIMARY, WHITE } from "@/constants/Colors";

type props = {
  title: string;
  onPress: () => void;
  disabled: boolean;
};

const Button = ({ title, onPress, disabled }: props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && { backgroundColor: PRIMARY.DARK },
        disabled && { backgroundColor: PRIMARY.LIGHT, opacity: 0.6 },
      ]}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disable: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PRIMARY.DEFAULT,
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default Button;
