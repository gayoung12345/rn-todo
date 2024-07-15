import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { GRAY, PRIMARY, WHITE } from "@/constants/Colors";

type props = {
  title: string;
  onPress: () => void;
  disabled: boolean;
  isLoading: boolean;
};

const Button = ({ title, onPress, disabled, isLoading }: props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && !disabled && { backgroundColor: PRIMARY.DARK },
        disabled && { backgroundColor: PRIMARY.LIGHT, opacity: 0.6 },
      ]}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={GRAY.DEFAULT} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Pressable>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
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
    lineHeight: 20,
  },
});

export default Button;
