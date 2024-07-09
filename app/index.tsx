import { Image, StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/image.jpg")}
        style={styles.image}
      />
      <Text>SignIn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default index;

// db = (px * 160) / ppi
// px = dp * ppi / 160;
