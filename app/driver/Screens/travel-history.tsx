import { Image, ScrollView, Text, View } from "react-native";
import styles from "../../styles";
import DriverBottomNav from "../components/BottomNav";

const historyItems = [
  {
    id: "1",
    company: "Department of Admin Office",
    subtitle: "New booking confirmed",
    time: "Today · 5:49 PM",
    status: "Completed",
  },
  {
    id: "2",
    company: "Department of Admin Office",
    subtitle: "Passenger Reschedule",
    time: "Yesterday · 5:49 PM",
    status: "Completed",
  },
  {
    id: "3",
    company: "Department of Admin Office",
    subtitle: "New booking confirmed",
    time: "2 days ago · 5:49 PM",
    status: "Canceled",
  },
  {
    id: "4",
    company: "Department of Admin Office",
    subtitle: "New booking confirmed",
    time: "Today · 5:49 PM",
    status: "Completed",
  },
];

export default function DriverTravelHistory() {
  return (
    <View style={styles.travelHistoryScreen}>
      <View style={styles.travelHistoryHeader}>
        <Text style={styles.travelHistoryHeaderTitle}>Travel History</Text>
      </View>

      <ScrollView
        style={styles.travelHistoryScreen}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.travelHistorySection}>
          <View style={styles.travelHistorySectionHeader}>
            <View style={styles.travelHistorySectionBullet} />
            <Text style={styles.travelHistorySectionTitle}>Past Trips</Text>
          </View>

          {historyItems.map((item) => {
            const isCompleted = item.status === "Completed";
            const isCancelled = item.status === "Canceled";

            return (
              <View key={item.id} style={styles.travelHistoryCard}>
                <Image
                  source={require("../../../assets/images/CapitolCab.png")}
                  style={styles.travelHistoryCardImage}
                />
                <View style={styles.travelHistoryCardContent}>
                  <Text style={styles.travelHistoryCardTitle}>
                    {item.company}
                  </Text>
                  <Text style={styles.travelHistoryCardSubtitle}>
                    {item.subtitle}
                  </Text>
                  <Text style={styles.travelHistoryCardTime}>{item.time}</Text>
                </View>
                <View
                  style={[
                    styles.travelHistoryStatusBadge,
                    isCompleted && styles.travelHistoryStatusCompleted,
                    isCancelled && styles.travelHistoryStatusCancelled,
                    !isCompleted &&
                      !isCancelled &&
                      styles.travelHistoryStatusPending,
                  ]}
                >
                  <Text
                    style={[
                      styles.travelHistoryStatusText,
                      isCompleted && styles.travelHistoryStatusCompletedText,
                      isCancelled && styles.travelHistoryStatusCancelledText,
                      !isCompleted &&
                        !isCancelled &&
                        styles.travelHistoryStatusPendingText,
                    ]}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <DriverBottomNav active="history" />
    </View>
  );
}
