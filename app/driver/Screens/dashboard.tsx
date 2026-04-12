import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";
import DriverBottomNav from "../components/BottomNav";

export default function DriverDashboard() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f1f5f9" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 112 }}
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
          <Text
            style={{
              color: "#fff",
              fontSize: 28,
              fontWeight: "700",
            }}
          >
            Driver Dashboard
          </Text>
          <Text
            style={{
              marginTop: 8,
              color: "#d1fae5",
              fontSize: 14,
              lineHeight: 20,
            }}
          >
            Monitor assigned rides, earnings, and driver availability.
          </Text>
        </View>

        <View style={{ padding: 20 }}>
          <View style={styles.dashboardCard}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Text style={styles.dashboardCardTitle}>Active Status</Text>
              <View
                style={{
                  borderRadius: 999,
                  backgroundColor: "#d1fae5",
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                }}
              >
                <Text style={{ color: "#166534", fontWeight: "700" }}>
                  Online
                </Text>
              </View>
            </View>
            <Text style={styles.dashboardCardSubtitle}>
              You are currently available for new trip assignments.
            </Text>
          </View>

          <View style={styles.dashboardCard}>
            <Text style={styles.dashboardCardTitle}>Today&apos;s Summary</Text>
            <Text style={[styles.dashboardCardSubtitle, { marginTop: 8 }]}>
              4 trips completed
            </Text>
            <Text style={[styles.dashboardCardSubtitle, { marginTop: 4 }]}>
              ₱2,450 earnings
            </Text>
            <Text style={[styles.dashboardCardSubtitle, { marginTop: 4 }]}>
              2 pending pickups
            </Text>
          </View>

          <View style={styles.dashboardCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
              }}
              style={{
                width: "100%",
                height: 180,
                borderRadius: 24,
                marginBottom: 12,
              }}
            />
            <Text style={styles.dashboardCardTitle}>Next Pickup</Text>
            <Text style={[styles.dashboardCardSubtitle, { marginTop: 8 }]}>
              Pampanga Provincial Hospital
            </Text>
            <Text style={[styles.dashboardCardSubtitle, { marginTop: 2 }]}>
              Arrival in 12 min
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 16,
                borderRadius: 24,
                backgroundColor: "#047857",
                paddingVertical: 14,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "700" }}>
                Navigate to Pickup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <DriverBottomNav active="home" />
    </View>
  );
}
