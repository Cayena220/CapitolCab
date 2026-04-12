import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";
import DriverBottomNav from "../components/BottomNav";

const notifications = [
  {
    id: "1",
    title: "New Trip Assigned",
    description: "Pickup scheduled from Provincial Health Office.",
    time: "8:20 AM",
    status: "New",
  },
  {
    id: "2",
    title: "Route Change",
    description: "Your destination has been updated for the next trip.",
    time: "7:18 AM",
    status: "Update",
  },
  {
    id: "3",
    title: "Payment Received",
    description: "You have received ₱1,050 for the completed ride.",
    time: "Yesterday",
    status: "Success",
  },
];

export default function DriverNotification() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f1f5f9" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 112 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "#064e3b",
            paddingHorizontal: 20,
            paddingTop: 48,
            paddingBottom: 24,
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 32,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 28, fontWeight: "700" }}>
            Notifications
          </Text>
        </View>

        <View style={{ padding: 20 }}>
          {notifications.map((notification) => (
            <View key={notification.id} style={styles.notificationCard}>
              <View style={styles.notificationCardHeader}>
                <Text style={styles.notificationTitle}>
                  {notification.title}
                </Text>
                <Text style={styles.notificationStatus}>
                  {notification.status}
                </Text>
              </View>
              <Text style={styles.notificationDescription}>
                {notification.description}
              </Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationButtonText}>Clear All</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <DriverBottomNav active="notification" />
    </View>
  );
}
