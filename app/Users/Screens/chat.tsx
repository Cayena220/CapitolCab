import { Ionicons } from "@expo/vector-icons";
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
import styles from "../../styles";
import BottomNav from "../components/BottomNav";

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
    <View style={styles.chatScreen}>
      <View style={styles.chatHeader}>
        <Text style={styles.chatHeaderText}></Text>
      </View>

      {selectedThread ? (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 80}
        >
          <View style={styles.chatBackRow}>
            <TouchableOpacity onPress={() => setSelectedThread(null)}>
              <Ionicons name="chevron-back" size={24} color="#134e4a" />
            </TouchableOpacity>
            <Text style={[styles.chatThreadName, { fontSize: 18 }]}>
              John Earl Ortega
            </Text>
            <View style={{ width: 24 }} />
          </View>

          <ScrollView
            style={styles.chatMessages}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 140 }}
          >
            {messages.map((message) => (
              <View
                key={message.id}
                style={[
                  styles.chatBubble,
                  message.fromMe
                    ? styles.chatBubbleSent
                    : styles.chatBubbleReceived,
                ]}
              >
                <Text
                  style={
                    message.fromMe
                      ? styles.chatBubbleSentText
                      : styles.chatBubbleReceivedText
                  }
                >
                  {message.text}
                </Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.chatInputWrapper}>
            <View style={styles.chatInputRow}>
              <TextInput
                value={draft}
                onChangeText={setDraft}
                placeholder="message"
                style={styles.chatInput}
              />
              <TouchableOpacity style={styles.chatSendButton}>
                <Text style={styles.chatSendText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      ) : (
        <ScrollView
          style={styles.chatThreadList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <Text style={styles.chatHeading}>Messages</Text>
          {threads.map((thread) => (
            <TouchableOpacity
              key={thread.id}
              style={styles.chatThreadCard}
              onPress={() => setSelectedThread(thread.id)}
            >
              <View style={styles.chatThreadHeader}>
                <Text style={styles.chatThreadName}>{thread.name}</Text>
                <Text style={styles.chatThreadTime}>{thread.time}</Text>
              </View>
              <Text style={styles.chatThreadText}>{thread.lastMessage}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <BottomNav active="chat" />
    </View>
  );
}
