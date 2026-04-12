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
import DriverBottomNav from "../components/BottomNav";

const threads = [
  {
    id: "1",
    name: "Passenger Request",
    lastMessage: "Please wait at the terminal.",
    time: "8:45 AM",
  },
  {
    id: "2",
    name: "Dispatch",
    lastMessage: "Confirm pickup complete.",
    time: "7:30 AM",
  },
];

const messages = [
  { id: "1", fromMe: false, text: "I&apos;m here at the pickup point." },
  { id: "2", fromMe: true, text: "Great, I&apos;m coming now." },
];

export default function DriverChat() {
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  return (
    <View style={styles.chatScreen}>
      <View style={styles.chatHeader}>
        <Text style={styles.chatHeaderText}>Driver Chat</Text>
      </View>

      {selectedThread ? (
        <KeyboardAvoidingView
          style={styles.chatScreen}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.chatBackRow}>
            <TouchableOpacity onPress={() => setSelectedThread(null)}>
              <Ionicons name="chevron-back" size={24} color="#134e4a" />
            </TouchableOpacity>
            <Text style={[styles.chatThreadName, { fontSize: 18 }]}>
              Passenger Request
            </Text>
            <View style={{ width: 24 }} />
          </View>

          <ScrollView
            style={styles.chatMessages}
            showsVerticalScrollIndicator={false}
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
                placeholder="Message"
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
          contentContainerStyle={{ paddingBottom: 112 }}
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

      <DriverBottomNav active="chat" />
    </View>
  );
}
