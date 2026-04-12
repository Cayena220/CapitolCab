import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

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
