import { useRouter } from "expo-router";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import styles from "../styles";

export default function Login() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.authScreen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.authScroll}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.authContent}>
          <Image
            source={require("../../assets/images/CapitolCab.png")}
            style={styles.authLogo}
            resizeMode="contain"
          />

          <Text style={styles.authTitle}>Hi, Welcome Back 👋</Text>
          <Text style={styles.authSubtitle}>
            Hello again, you've been missed!
          </Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.authInput}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.authInput}
          />

          <View style={styles.authRow}>
            <Text style={styles.authFooterText}>Remember Me</Text>
            <TouchableOpacity>
              <Text style={styles.authLinkText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.authButton}
            onPress={() => router.push("/Users/Screens/dashboard")}
          >
            <Text style={styles.authButtonText}>Login</Text>
          </TouchableOpacity>

          <View
            style={[
              styles.authRow,
              { justifyContent: "center", flexWrap: "wrap", marginTop: 8 },
            ]}
          >
            <Text style={styles.authFooterText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push("../auth/register")}>
              <Text style={styles.authLinkText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
