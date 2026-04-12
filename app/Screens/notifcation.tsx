import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const notifications = [
  {
    id: "1",
    title: "Department of Admin Office",
    description: "You receive response to Cab Driver",
    time: "5:43 PM",
    status: "New",
  },
  {
    id: "2",
    title: "Department of Admin Office",
    description: "Your scheduled trip has been confirmed",
    time: "4:12 PM",
    status: "New",
  },
  {
    id: "3",
    title: "Department of Admin Office",
    description: "Trip details were updated successfully",
    time: "3:08 PM",
    status: "New",
  },
];

export default function NotificationScreen() {
  return (
    <View className="flex-1 bg-slate-100">
      <View className="bg-emerald-900 px-5 pt-12 pb-6 rounded-b-[32px] shadow-xl">
        <Text className="text-white text-2xl font-bold">Notification</Text>
      </View>

      <View className="px-5 mt-5 flex-row justify-between items-center">
        <Text className="text-slate-900 text-base font-semibold">Recent Updates</Text>
        <TouchableOpacity className="rounded-full bg-rose-100 px-4 py-2">
          <Text className="text-rose-700 font-semibold text-sm">Read All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="px-5 mt-4" showsVerticalScrollIndicator={false}>
        {notifications.map((notification) => (
          <View key={notification.id} className="mb-4 rounded-[24px] bg-white p-4 shadow-sm">
            <View className="flex-row items-start gap-3">
              <View className="w-12 h-12 rounded-full bg-emerald-100 items-center justify-center">
                <Text className="text-emerald-700 font-bold">DC</Text>
              </View>

              <View className="flex-1">
                <View className="flex-row justify-between items-start">
                  <Text className="font-semibold text-slate-900">{notification.title}</Text>
                  <Text className="text-xs text-emerald-700 font-semibold">{notification.status}</Text>
                </View>
                <Text className="text-slate-500 text-sm mt-1">{notification.description}</Text>
                <Text className="text-slate-400 text-xs mt-3">{notification.time}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
