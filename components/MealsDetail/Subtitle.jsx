import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: "#e6c1aa",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      subtitleContainer: {
        margin: 4,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: "#e6c1aa",
        borderBottomWidth: 2,
      },
});
