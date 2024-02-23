import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AlarmClock from "./AlarmClock";

//npm install @react-native-async-storage/async-storage
//npx expo install expo-notifications

/*
add this in app.json

,
    "expo-notifications": {
      "icon": "./assets/favicon.png",
      "color": "#ffffff"
    }
*/

export default function App() {
  return (
    <>
      <AlarmClock />
    </>
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