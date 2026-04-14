import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";
import BottomNav from "../components/BottomNav";

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
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.notificationScreen}
        contentContainerStyle={{ paddingBottom: 112 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationHeaderTitle}></Text>
        </View>

        <View style={styles.notificationTopRow}>
          <Text style={styles.notificationSectionTitle}>Recent Updates</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationButtonText}>Read All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.notificationList}
          showsVerticalScrollIndicator={false}
        >
          {notifications.map((notification) => (
            <View key={notification.id} style={styles.notificationCard}>
              <View style={styles.notificationCardRow}>
                <View style={styles.notificationAvatar}>
                  <Text style={styles.notificationAvatarText}>DC</Text>
                </View>

                <View style={styles.notificationCardContent}>
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
                  <Text style={styles.notificationTime}>
                    {notification.time}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      <BottomNav active="notification" />
    </View>
  );
}
