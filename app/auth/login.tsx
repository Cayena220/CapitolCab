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

export default function Login() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 px-6 py-8 bg-white justify-center">
          <Image
            source={require("../../assets/images/CapitolCab.png")}
            className="w-[160px] h-[160px] self-center mb-6"
            resizeMode="contain"
          />

          <Text className="text-2xl font-bold text-slate-900 mb-2">
            Hi, Welcome Back 👋
          </Text>
          <Text className="text-base text-slate-600 mb-7">
            Hello again, you've been missed!
          </Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            className="border border-slate-300 rounded-2xl px-4 py-4 mb-4 bg-slate-50 text-base text-slate-900"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            className="border border-slate-300 rounded-2xl px-4 py-4 mb-4 bg-slate-50 text-base text-slate-900"
          />

          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-sm text-slate-800">Remember Me</Text>
            <TouchableOpacity>
              <Text className="text-emerald-700 font-semibold">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="bg-emerald-700 py-4 rounded-2xl items-center mb-6"
            onPress={() => router.push("../Screens/dashboard")}
          >
            <Text className="text-white font-bold text-base">Login</Text>
          </TouchableOpacity>

          <View className="flex-row flex-wrap justify-center items-center mt-2">
            <Text className="text-sm text-slate-700">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("../auth/register")}>
              <Text className="text-emerald-700 font-semibold">
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
