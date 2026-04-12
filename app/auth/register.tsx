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

export default function Register() {
  const router = useRouter();
  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-5 py-8 bg-white">
          <Image
            source={require("../../assets/images/CapitolCab.png")}
            className="w-[50%] h-[120px] self-center mb-5"
            resizeMode="contain"
          />

          <Text className="text-2xl font-bold mb-1">Create your Account</Text>
          <Text className="text-slate-600 mb-5">Personal Information</Text>

          <TextInput
            placeholder="Employee ID"
            className="border border-slate-300 rounded-xl px-3 py-3 bg-slate-50 text-base mb-4"
          />

          <View className="flex-row justify-between mb-4">
            <TextInput
              placeholder="Full Name"
              className="flex-[2] border border-slate-300 rounded-xl px-3 py-3 bg-slate-50 text-base mr-2"
            />
            <TextInput
              placeholder="Suffix"
              className="flex-[2] border border-slate-300 rounded-xl px-3 py-3 bg-slate-50 text-base"
            />
          </View>

          <View className="flex-row justify-between mb-4">
            <TextInput
              placeholder="Contact No. 1"
              keyboardType="phone-pad"
              className="flex-1 border border-slate-300 rounded-xl px-3 py-3 bg-slate-50 text-base mr-2"
            />
            <TextInput
              placeholder="Contact No. 2"
              keyboardType="phone-pad"
              className="flex-1 border border-slate-300 rounded-xl px-3 py-3 bg-slate-50 text-base"
            />
          </View>

          <View className="flex-row mb-4">
            <TextInput
              placeholder="Enter OTP"
              keyboardType="numeric"
              className="flex-[2] border border-slate-300 rounded-xl px-3 py-3 bg-slate-50 text-base mr-2"
            />
            <TouchableOpacity className="flex-1 bg-emerald-700 rounded-xl justify-center items-center h-12">
              <Text className="text-white font-semibold">Enter</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="bg-emerald-700 py-4 rounded-xl items-center mt-2"
            onPress={() => router.push("/auth/register2")}
          >
            <Text className="text-white font-bold text-base">Next</Text>
          </TouchableOpacity>

          <Text className="text-center mt-5 text-slate-700">
            Already have an account?{" "}
            <Text className="text-emerald-700">Login</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
