import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles";

export default function Register2() {
  const router = useRouter();

  return (
    <View
      style={[
        styles.authScreen,
        { paddingHorizontal: 20, paddingVertical: 24, backgroundColor: "#fff" },
      ]}
    >
      <Image
        source={require("../../assets/images/CapitolCab.png")}
        style={[styles.authLogo, { width: "50%", height: 120 }]}
        resizeMode="contain"
      />
      <Text style={styles.authTitle}>Create your Account</Text>
      <Text style={styles.authSubtitle}>Account and Verification</Text>

      <TextInput
        placeholder="Email"
        style={[styles.authInput, { marginBottom: 12 }]}
      />
      <TextInput
        placeholder="Username"
        style={[styles.authInput, { marginBottom: 12 }]}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.authInput, { marginBottom: 12 }]}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        style={[styles.authInput, { marginBottom: 16 }]}
      />

      <TouchableOpacity
        style={[styles.authButton, { marginBottom: 0 }]}
        onPress={() => router.push("/auth/login")}
      >
        <Text style={styles.authButtonText}>Create</Text>
      </TouchableOpacity>

      <Text style={[styles.authFooterText, { marginTop: 20 }]}>
        Already have an account? <Text style={styles.authLinkText}>Login</Text>
      </Text>
    </View>
  );
}
