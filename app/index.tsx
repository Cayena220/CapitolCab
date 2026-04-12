import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";

export default function Welcome() {
  const router = useRouter();

  return (
    <TouchableOpacity
      className="flex-1 bg-white justify-center items-center p-5"
      activeOpacity={1}
      onPress={() => router.push("/auth/login")}
    >
      <Image
        source={require("../assets/images/CapitolCab.png")}
        className="w-[70%] h-[250px] max-w-[280px] mb-5"
        resizeMode="contain"
      />

      <Text className="absolute bottom-2 text-sm text-gray-500">
        © 2026 ICTD
      </Text>
    </TouchableOpacity>
  );
}
