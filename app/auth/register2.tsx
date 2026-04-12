import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register2() {
  const router = useRouter();
  return (
    <View className="flex-1 px-5 py-6 bg-white">
      <Image
        source={require("../../assets/images/CapitolCab.png")}
        className="w-[50%] h-[120px] self-center mb-5"
        resizeMode="contain"
      />
      <Text className="text-2xl font-bold mb-1">Create your Account</Text>
      <Text className="text-slate-600 mb-5">Account and Verification</Text>

      <TextInput
        placeholder="Email"
        className="border border-slate-300 rounded-xl px-3 py-3 mb-3 bg-slate-50"
      />
      <TextInput
        placeholder="Username"
        className="border border-slate-300 rounded-xl px-3 py-3 mb-3 bg-slate-50"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="border border-slate-300 rounded-xl px-3 py-3 mb-3 bg-slate-50"
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        className="border border-slate-300 rounded-xl px-3 py-3 mb-4 bg-slate-50"
      />

      <TouchableOpacity
        className="bg-emerald-700 py-4 rounded-xl items-center"
        onPress={() => router.push("/auth/login")}
      >
        <Text className="text-white font-bold text-base">Create</Text>
      </TouchableOpacity>

      <Text className="text-center mt-5 text-slate-700">
        Already have an account? <Text className="text-emerald-700">Login</Text>
      </Text>
    </View>
  );
}
