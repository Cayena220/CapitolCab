import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your Account</Text>
      <Text style={styles.subtitle}>Personal Information</Text>
      <Image
        source={require("../assets/CapitolCab.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      ;
      <TextInput placeholder="Employee ID" style={styles.input} />
      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Suffix" style={styles.input} />
      <TextInput placeholder="Contact No.1" style={styles.input} />
      <TextInput placeholder="Contact No.2" style={styles.input} />
      <TextInput placeholder="Enter OTP" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>
        Already have an account? <Text style={styles.link}>Login</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
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
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  footer: { textAlign: "center", marginTop: 20 },
  link: { color: "green" },
});
