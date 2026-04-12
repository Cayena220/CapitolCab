import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function BookScreen() {
  const [tripType, setTripType] = useState("overnight");

  return (
    <ScrollView className="flex-1 bg-slate-100" contentContainerStyle={{ paddingBottom: 32 }}>
      <View className="bg-emerald-900 px-5 pt-10 pb-7 rounded-b-[32px] shadow-xl">
        <Text className="text-white text-2xl font-bold">Booked Travel</Text>
        <Text className="mt-2 text-emerald-100 text-sm">
          Confirm trip details and submit a request for your upcoming ride.
        </Text>
      </View>

      <View className="px-5 mt-5">
        <View className="rounded-[28px] bg-white p-5 shadow-sm">
          <View className="flex-row justify-between items-center mb-4">
            <View>
              <Text className="text-slate-900 text-base font-semibold">Rosalie L. Taclado</Text>
              <Text className="text-slate-500 text-sm">Provincial Health Office</Text>
            </View>
            <View className="rounded-2xl bg-emerald-50 px-3 py-2">
              <Text className="text-emerald-800 text-xs font-semibold">Confirmed</Text>
            </View>
          </View>

          <Text className="text-slate-600 text-sm mb-2">Date Range</Text>
          <View className="flex-row gap-3 mb-4">
            <TextInput placeholder="Select Date Range" className="flex-1 border border-slate-200 rounded-2xl px-4 py-3 bg-slate-50" />
            <TextInput placeholder="Departure" className="flex-1 border border-slate-200 rounded-2xl px-4 py-3 bg-slate-50" />
          </View>

          <Text className="text-slate-600 text-sm mb-2">Trip Type</Text>
          <View className="flex-row gap-3 mb-4">
            {[
              { key: "overnight", label: "Overnight" },
              { key: "roundtrip", label: "Round Trip" },
            ].map((item) => (
              <TouchableOpacity
                key={item.key}
                className={`flex-1 rounded-2xl border px-4 py-3 items-center ${
                  tripType === item.key ? "border-emerald-700 bg-emerald-50" : "border-slate-200 bg-white"
                }`}
                onPress={() => setTripType(item.key)}
              >
                <Text className={`font-semibold ${tripType === item.key ? "text-emerald-800" : "text-slate-700"}`}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput placeholder="Pickup Location" className="border border-slate-200 rounded-2xl px-4 py-3 bg-slate-50 mb-3" />
          <TouchableOpacity className="flex-row items-center gap-2 mb-4">
            <View className="w-8 h-8 rounded-full bg-slate-200" />
            <Text className="text-emerald-700 font-semibold">Add Location</Text>
          </TouchableOpacity>

          <View className="flex-row gap-3 mb-4">
            <TextInput placeholder="Contact Person" className="flex-1 border border-slate-200 rounded-2xl px-4 py-3 bg-slate-50" />
            <TextInput placeholder="Passenger" className="flex-1 border border-slate-200 rounded-2xl px-4 py-3 bg-slate-50" />
          </View>

          <TextInput placeholder="Enter Purpose of Trip" className="border border-slate-200 rounded-2xl px-4 py-3 bg-slate-50 mb-5" multiline />

          <TouchableOpacity className="bg-emerald-700 rounded-2xl py-4 items-center">
            <Text className="text-white font-semibold">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
