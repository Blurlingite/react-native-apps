import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text1Style}>Box 1</Text>
      <Text style={styles.text2Style}>Box 2</Text>
      <Text style={styles.text3Style}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },

  text1Style: {
    borderWidth: 3,
    borderColor: "red",
  },
  text2Style: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "center",
  },
  text3Style: {
    borderWidth: 3,
    borderColor: "red",
  },
});

export default BoxScreen;
