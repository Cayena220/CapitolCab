import { useRouter } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/CapitolCab.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>Hi, Welcome Back 👋</Text>
          <Text style={styles.subtitle}>Hello again, you've been missed!</Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />

          <View style={styles.row}>
            <Text style={styles.rememberText}>Remember Me</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("../Screens/dashboard")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.footerRow}>
            <Text style={styles.footer}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push("../auth/register")}>
              <Text style={styles.link}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  logo: {
    width: 160,
    height: 160,
    alignSelf: "center",
    marginBottom: 24,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    marginBottom: 28,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 14,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  rememberText: {
    fontSize: 14,
    color: "#333",
  },

  link: {
    color: "#0a7f3f",
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#0a7f3f",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 24,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 8,
  },

  footer: {
    fontSize: 14,
    color: "#444",
  },
});
