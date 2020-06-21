import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import Weather from "./components/Weather";
import { FetchWeather } from "./utils/FetchWeather";

export default function App() {
  const [isLoading, setLoader] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        let fetch = await FetchWeather(
          position.coords.latitude,
          position.coords.longitude
        );
        if (!fetch) {
          setError(`API Error`);
        } else {
          setTemperature(fetch.main.temp);
          setWeatherCondition(fetch.weather[0].main);
          setLoader(false);
        }
      },
      (error) => {
        setError("Error fetching Weather Conditions");
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Fetching the Weather</Text>
      ) : (
        <Weather weather={weatherCondition} temperature={temperature} />
      )}
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
