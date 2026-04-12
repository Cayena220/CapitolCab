import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import type { ScrollView as RNScrollView } from "react-native";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const bannerImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
];

export default function Dashboard() {
  const router = useRouter();
  const bannerRef = useRef<RNScrollView | null>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % bannerImages.length;
      bannerRef.current?.scrollTo({
        x: currentIndex.current * (width - 40 + 12),
        animated: true,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex-1 bg-emerald-900">
      <View className="pt-4 px-5 pb-4 items-start">
        <View className="mt-2 items-start justify-center">
          <Image
            source={require("../../assets/images/CapitolCab.png")}
            className="w-[120px] h-[52px] mb-1"
            resizeMode="contain"
          />
          <Text className="ml-1 text-2xl font-bold text-white">Homepage</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-slate-100 rounded-t-[28px] px-5 pb-28"
        contentContainerStyle={{ paddingTop: 4 }}
      >
        <ScrollView
          ref={bannerRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          className="mb-6"
        >
          {bannerImages.map((image, index) => (
            <TouchableOpacity
              key={index}
              className="mr-3"
              style={{ width: width - 40 }}
            >
              <Image
                source={{ uri: image }}
                className="w-full h-36 rounded-[18px]"
              />

              <View className="absolute bottom-3 left-3 flex-row items-center rounded-full bg-white/90 px-3 py-1">
                <Text className="text-base">⭐</Text>
                <Text className="ml-2 text-sm text-slate-900">
                  4.8 (12k Reviews)
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity className="flex-row items-center gap-4 rounded-[24px] bg-white p-4 mb-4 shadow-lg">
          <View className="w-14 h-14 rounded-[18px] items-center justify-center bg-emerald-100">
            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              size={28}
              color="#159A9C"
            />
          </View>

          <View>
            <Text className="text-lg font-semibold text-slate-900">
              User Manual
            </Text>
            <Text className="text-sm text-slate-500">Read the guide</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center gap-4 rounded-[24px] bg-white p-4 mb-6 shadow-lg">
          <View className="w-14 h-14 rounded-[18px] items-center justify-center bg-orange-100">
            <Ionicons name="bag-outline" size={26} color="#E58B00" />
          </View>

          <View>
            <Text className="text-lg font-semibold text-slate-900">
              Travel Status
            </Text>
            <Text className="text-sm text-slate-500">View Status</Text>
          </View>
        </TouchableOpacity>

        <View className="rounded-[24px] overflow-hidden shadow-lg">
          <Image
            source={{
              uri: "https://maps.googleapis.com/maps/api/staticmap?center=Philippines&zoom=8&size=600x300&maptype=satellite",
            }}
            className="w-full h-44"
          />
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 flex-row justify-between items-center bg-white px-5 py-3 shadow-xl">
        <TouchableOpacity className="items-center">
          <Ionicons name="home-outline" size={22} color="#16a34a" />
          <Text className="mt-1 text-xs font-semibold text-emerald-600">
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center"
          onPress={() => router.push("../Screens/book")}
        >
          <Ionicons name="book-outline" size={22} color="#666" />
          <Text className="mt-1 text-xs text-slate-600">Book</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center"
          onPress={() => router.push("../Screens/notifcation")}
        >
          <Ionicons name="notifications-outline" size={22} color="#666" />
          <Text className="mt-1 text-xs text-slate-600">Notification</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center"
          onPress={() => router.push("../Screens/chat")}
        >
          <Ionicons name="chatbubble-outline" size={22} color="#666" />
          <Text className="mt-1 text-xs text-slate-600">Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center"
          onPress={() => router.push("../Screens/profile")}
        >
          <Ionicons name="person-outline" size={22} color="#666" />
          <Text className="mt-1 text-xs text-slate-600">Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
