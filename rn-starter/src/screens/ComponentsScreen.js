import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const ComponentsScreen = () => {
  const greeting = <Text style={styles.textStyle}>Hello!</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
