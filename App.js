import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [isLoading, setLoader] = useState(true);
  return (
    <View style={styles.container}>
      {isLoading ? <Text>Fetching the Weather</Text> : <Text>Weather App</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
