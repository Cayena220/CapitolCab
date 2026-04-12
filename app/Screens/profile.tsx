import { useState } from "react";
import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

const menuItems = [
  { label: "Account Info" },
  { label: "Change Email" },
  { label: "Change Password" },
  { label: "Notification Settings" },
  { label: "Privacy Settings" },
  { label: "Language", trailing: "English" },
];

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View className="flex-1 bg-slate-100">
      <View className="bg-emerald-900 px-5 pt-12 pb-6 rounded-b-[32px] shadow-xl">
        <Text className="text-white text-2xl font-bold">Profile Settings</Text>
      </View>

      <ScrollView className="px-5 mt-5" showsVerticalScrollIndicator={false}>
        <View className="rounded-[28px] bg-white p-5 shadow-sm items-center">
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=256&q=80" }}
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-slate-900 text-xl font-semibold">Emily Johnson</Text>
          <Text className="text-slate-500 text-sm">emily.j@email.com</Text>
          <TouchableOpacity className="mt-4 rounded-full border border-emerald-700 px-6 py-2">
            <Text className="text-emerald-700 font-semibold">Edit</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-6 space-y-3">
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.label}
              className="rounded-[24px] bg-white px-4 py-4 shadow-sm flex-row justify-between items-center"
            >
              <Text className="text-slate-900 font-medium">{item.label}</Text>
              <Text className="text-slate-500 text-sm">{item.trailing || ""}</Text>
            </TouchableOpacity>
          ))}

          <View className="rounded-[24px] bg-white px-4 py-4 shadow-sm flex-row justify-between items-center">
            <View>
              <Text className="text-slate-900 font-medium">Dark Mode</Text>
              <Text className="text-slate-500 text-sm">Toggle app appearance</Text>
            </View>
            <Switch value={darkMode} onValueChange={setDarkMode} thumbColor={darkMode ? "#10b981" : "#f4f3f4"} trackColor={{ false: "#d1d5db", true: "#a7f3d0" }} />
          </View>

          <TouchableOpacity className="rounded-[24px] bg-white px-4 py-4 shadow-sm flex-row justify-between items-center">
            <Text className="text-slate-900 font-medium">Language</Text>
            <Text className="text-slate-500 text-sm">English</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="mt-6 rounded-[24px] bg-white px-4 py-4 shadow-sm items-center">
          <Text className="text-red-600 font-semibold">Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
