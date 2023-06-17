import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../constants";

const EndScreen = ({ won = false }) => {
  return (
    <View>
      <Text style={styles.title}>{won ? "Congrats!" : "Meh, Try again tomorrow"}</Text>

      <Text style={styles.subtitle}>STATISTICS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    marginVertical: 20
  },
  subtitle: {
    fontSize: 20,
    color: colors.lightgrey,
    textAlign: "center",
    marginVertical: 20
  }
});

export default EndScreen;
