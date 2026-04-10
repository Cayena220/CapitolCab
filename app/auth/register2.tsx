import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register2() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/CapitolCab.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Create your Account</Text>
      <Text style={styles.subtitle}>Account and Verification</Text>

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Already have an account? <Text style={styles.link}>Login</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { color: "#777", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0a7f3f",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  footer: { textAlign: "center", marginTop: 20 },
  link: { color: "green" },

  logo: {
    width: "50%",
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
  },
});
