import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Welcome() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => router.push("/auth/login")}
    >
      <Image
        source={require("../assets/images/CapitolCab.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.footer}>© 2026 ICTD</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: "70%",
    height: 250,
    maxWidth: 280,
    marginBottom: 20,
  },

  tapText: {
    fontSize: 16,
    color: "#0a7f3f",
    marginTop: 10,
  },

  footer: {
    position: "absolute",
    bottom: 10,
    fontSize: 14,
    color: "#555",
  },
});
