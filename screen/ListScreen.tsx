import { memo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "@/components/ListItem";
import { GRAY } from "@/constants/Colors";

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const ListScreen = () => {
  const todos = [
    { id: 1, task: "React Native", isDone: false },
    { id: 2, task: "React Native", isDone: true },
    { id: 3, task: "React Native", isDone: false },
    { id: 4, task: "React Native", isDone: false },
    { id: 5, task: "React Native", isDone: false },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        windowSize={3}
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item} />}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default ListScreen;
