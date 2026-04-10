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

export default function Register() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Logo */}
          <Image
            source={require("../../assets/images/CapitolCab.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Title */}
          <Text style={styles.title}>Create your Account</Text>
          <Text style={styles.subtitle}>Personal Information</Text>

          {/* Employee ID */}
          <TextInput placeholder="Employee ID" style={styles.input} />

          <View style={styles.row}>
            <TextInput
              placeholder="Full Name"
              style={[styles.input, styles.flex2]}
            />
            <TextInput
              placeholder="Suffix"
              style={[styles.input, styles.flex2]}
            />
          </View>

          {/* Contact Numbers */}
          <View style={styles.row}>
            <TextInput
              placeholder="Contact No. 1"
              style={[styles.input, styles.halfInputLeft]}
              keyboardType="phone-pad"
            />
            <TextInput
              placeholder="Contact No. 2"
              style={[styles.input, styles.halfInputRight]}
              keyboardType="phone-pad"
            />
          </View>
          <view style={styles.row}>
            {/* OTP */}
            <View style={styles.row}>
              <TextInput
                placeholder="Enter OTP"
                style={[styles.input, styles.otpInput]}
                keyboardType="numeric"
              />

              <TouchableOpacity style={styles.otpButton}>
                <Text style={styles.buttonText}>Enter</Text>
              </TouchableOpacity>
            </View>
          </view>

          {/* Button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>

          {/* Footer */}
          <Text style={styles.footer}>
            Already have an account? <Text style={styles.link}>Login</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  otpInput: {
    flex: 2,
    marginRight: 8,
  },

  otpButton: {
    flex: 1,
    backgroundColor: "#0a7f3f",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 48, // match input height
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#fff",
  },

  logo: {
    width: "50%",
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },

  subtitle: {
    color: "#777",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    borderRadius: 7,
    fontSize: 14,
    height: 48,
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  halfInputLeft: {
    flex: 1,
    marginRight: 8,
  },

  halfInputRight: {
    flex: 1,
  },

  flex1: {
    flex: 1,
  },

  flex2: {
    flex: 2,
    marginRight: 8,
  },

  button: {
    backgroundColor: "#0a7f3f",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    marginTop: 20,
  },

  link: {
    color: "green",
  },
});
