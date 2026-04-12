import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Welcome() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.welcome}
      activeOpacity={1}
      onPress={() => router.push("/auth/login")}
    >
      <Image
        source={require("../assets/images/CapitolCab.png")}
        style={styles.welcomeImage}
        resizeMode="contain"
      />

      <Text style={styles.welcomeFooter}>© 2026 ICTD</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  welcomeFooter: {
    fontSize: 14,
    color: "#999",
  },
});
