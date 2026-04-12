import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const threads = [
  {
    id: "1",
    name: "John Earl Ortega",
    lastMessage: "2 New Messages",
    time: "5:43 PM",
  },
  {
    id: "2",
    name: "Driver Support",
    lastMessage: "Your driver is nearby",
    time: "4:20 PM",
  },
];

const messages = [
  { id: "1", fromMe: false, text: "Hello, are you available?" },
  { id: "2", fromMe: true, text: "Yes, how can I help?" },
  { id: "3", fromMe: false, text: "I need an update on my booking." },
];

export default function ChatScreen() {
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  return (
    <View className="flex-1 bg-slate-100">
      <View className="bg-emerald-900 px-5 pt-12 pb-6 rounded-b-[32px] shadow-xl">
        <Text className="text-white text-2xl font-bold">Chat</Text>
      </View>

      {selectedThread ? (
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View className="px-5 pt-4 flex-row items-center justify-between">
            <TouchableOpacity onPress={() => setSelectedThread(null)}>
              <Ionicons name="chevron-back" size={24} color="#134e4a" />
            </TouchableOpacity>
            <Text className="text-slate-900 text-lg font-semibold">John Earl Ortega</Text>
            <View className="w-6" />
          </View>

          <ScrollView className="px-5 mt-4" showsVerticalScrollIndicator={false}>
            {messages.map((message) => (
              <View
                key={message.id}
                className={`mb-3 max-w-[80%] ${
                  message.fromMe ? "ml-auto bg-emerald-700" : "bg-white"
                } rounded-3xl px-4 py-3 shadow-sm`}
              >
                <Text className={`${message.fromMe ? "text-white" : "text-slate-900"}`}>
                  {message.text}
                </Text>
              </View>
            ))}
          </ScrollView>

          <View className="absolute bottom-0 left-0 right-0 bg-slate-100 px-4 py-3 border-t border-slate-200">
            <View className="flex-row items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm">
              <TextInput
                value={draft}
                onChangeText={setDraft}
                placeholder="message"
                className="flex-1 text-slate-900"
              />
              <TouchableOpacity className="bg-emerald-700 rounded-full px-4 py-3">
                <Text className="text-white font-semibold">Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      ) : (
        <ScrollView className="px-5 mt-5" showsVerticalScrollIndicator={false}>
          <Text className="text-slate-900 text-base font-semibold mb-4">Messages</Text>
          {threads.map((thread) => (
            <TouchableOpacity
              key={thread.id}
              className="mb-4 rounded-[24px] bg-white p-4 shadow-sm"
              onPress={() => setSelectedThread(thread.id)}
            >
              <View className="flex-row items-center justify-between mb-3">
                <Text className="text-slate-900 font-semibold">{thread.name}</Text>
                <Text className="text-xs text-slate-400">{thread.time}</Text>
              </View>
              <Text className="text-slate-500 text-sm">{thread.lastMessage}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
