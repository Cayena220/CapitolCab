import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";
import DriverBottomNav from "../components/BottomNav";

const trips = [
  {
    id: "1",
    route: "Bacolod to Iloilo",
    status: "Assigned",
    time: "May 20 · 08:00 AM",
    passenger: "Rosalie L. Taclado",
  },
  {
    id: "2",
    route: "Davao to Taguig",
    status: "In Progress",
    time: "May 20 · 11:30 AM",
    passenger: "John Earl Ortega",
  },
];

export default function DriverTrip() {
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
            Assigned Trips
          </Text>
          <Text style={{ color: "#d1fae5", marginTop: 8, fontSize: 14 }}>
            Review your upcoming trips and manage pickup details.
          </Text>
        </View>

        <View style={{ padding: 20 }}>
          {trips.map((trip) => (
            <View key={trip.id} style={styles.bookCard}>
              <View style={styles.bookRow}>
                <View>
                  <Text
                    style={[
                      styles.bookSectionLabel,
                      {
                        color: "#0f172a",
                        fontSize: 16,
                        fontWeight: "700",
                        marginBottom: 4,
                      },
                    ]}
                  >
                    {trip.route}
                  </Text>
                  <Text style={styles.bookSectionLabel}>{trip.time}</Text>
                </View>
                <View style={styles.bookStatusBadge}>
                  <Text style={styles.bookStatusText}>{trip.status}</Text>
                </View>
              </View>

              <Text style={[styles.bookSectionLabel, { marginTop: 12 }]}>
                Passenger
              </Text>
              <Text style={styles.bookSectionLabel}>{trip.passenger}</Text>

              <TouchableOpacity
                style={[styles.bookSubmitButton, { marginTop: 16 }]}
              >
                <Text style={styles.bookSubmitText}>View Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <DriverBottomNav active="trip" />
    </View>
  );
}
