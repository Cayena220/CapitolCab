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

export default function Register() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.authScreen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.authScroll}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.authContent}>
          <Image
            source={require("../../assets/images/CapitolCab.png")}
            style={[styles.authLogo, { width: "50%", height: 120 }]}
            resizeMode="contain"
          />

          <Text style={styles.authTitle}>Create your Account</Text>
          <Text style={styles.authSubtitle}>Personal Information</Text>

          <TextInput placeholder="Employee ID" style={styles.authInput} />

          <View style={styles.authRow}>
            <TextInput
              placeholder="Full Name"
              style={[styles.authInputHalf, styles.authInputHalfMargin]}
            />
            <TextInput placeholder="Suffix" style={styles.authInputHalf} />
          </View>

          <View style={styles.authRow}>
            <TextInput
              placeholder="Contact No. 1"
              keyboardType="phone-pad"
              style={[styles.authInputHalf, styles.authInputHalfMargin]}
            />
            <TextInput
              placeholder="Contact No. 2"
              keyboardType="phone-pad"
              style={styles.authInputHalf}
            />
          </View>

          <View style={[styles.authRow, { marginBottom: 16 }]}>
            <TextInput
              placeholder="Enter OTP"
              keyboardType="numeric"
              style={[
                styles.authInputHalf,
                { flex: 2, marginRight: 12, marginBottom: 0 },
              ]}
            />
            <TouchableOpacity style={styles.authSmallButton}>
              <Text style={styles.authButtonText}>Enter</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.authButton, { marginTop: 8 }]}
            onPress={() => router.push("/auth/register2")}
          >
            <Text style={styles.authButtonText}>Next</Text>
          </TouchableOpacity>

          <Text style={[styles.authFooterText, { marginTop: 20 }]}>
            Already have an account?{" "}
            <Text style={styles.authLinkText}>Login</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
