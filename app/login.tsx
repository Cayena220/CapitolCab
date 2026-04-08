import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Hello again, you've been missed!</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <View style={styles.row}>
        <Text>Remember Me</Text>
        <Text style={styles.link}>Forgot Password</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Don't have an account? <Text style={styles.link}>Create Account</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { color: "#777", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  link: { color: "green" },
  button: {
    backgroundColor: "#0a7f3f",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  footer: { textAlign: "center", marginTop: 20 },
});
