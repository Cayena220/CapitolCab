import { StyleSheet, Text, View } from "react-native";

export default function BookScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
  },
});
