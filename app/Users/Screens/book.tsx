import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import styles from "../../styles";
import BottomNav from "../components/BottomNav";

export default function BookScreen() {
  const [tripType, setTripType] = useState("overnight");

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={[styles.bookScreen, { flex: 1 }]}
        contentContainerStyle={{ paddingBottom: 112 }}
      >
        <View style={styles.bookHeader}>
          <Text style={styles.bookHeaderTitle}>Booked Travel</Text>
          <Text style={styles.bookHeaderSubtitle}>
            Confirm trip details and submit a request for your upcoming ride.
          </Text>
        </View>

        <View style={styles.bookContent}>
          <View style={styles.bookCard}>
            <View style={styles.bookRow}>
              <View>
                <Text
                  style={[
                    styles.bookSectionLabel,
                    {
                      color: "#0f172a",
                      fontSize: 16,
                      fontWeight: "600",
                      marginBottom: 4,
                    },
                  ]}
                >
                  Rosalie L. Taclado
                </Text>
                <Text style={[styles.bookSectionLabel, { marginBottom: 0 }]}>
                  Provincial Health Office
                </Text>
              </View>
              <View style={styles.bookStatusBadge}>
                <Text style={styles.bookStatusText}>Confirmed</Text>
              </View>
            </View>

            <Text style={styles.bookSectionLabel}>Date Range</Text>
            <View style={styles.bookInputRow}>
              <TextInput
                placeholder="Select Date Range"
                style={[styles.bookInput, { marginRight: 12 }]}
              />
              <TextInput placeholder="Departure" style={styles.bookInput} />
            </View>

            <Text style={styles.bookSectionLabel}>Trip Type</Text>
            <View style={styles.bookTripRow}>
              {[
                { key: "overnight", label: "Overnight" },
                { key: "roundtrip", label: "Round Trip" },
              ].map((item) => (
                <TouchableOpacity
                  key={item.key}
                  style={[
                    styles.bookTripOption,
                    tripType === item.key
                      ? styles.bookTripOptionActive
                      : styles.bookTripOptionInactive,
                  ]}
                  onPress={() => setTripType(item.key)}
                >
                  <Text
                    style={
                      tripType === item.key
                        ? styles.bookTripOptionTextActive
                        : styles.bookTripOptionTextInactive
                    }
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TextInput
              placeholder="Pickup Location"
              style={[styles.bookInput, { marginBottom: 12 }]}
            />
            <TouchableOpacity style={styles.bookAddLocationRow}>
              <View style={styles.bookAddLocationIcon} />
              <Text style={styles.bookAddLocationText}>Add Location</Text>
            </TouchableOpacity>

            <View style={styles.bookInputRow}>
              <TextInput
                placeholder="Contact Person"
                style={[styles.bookInput, { marginRight: 12 }]}
              />
              <TextInput placeholder="Passenger" style={styles.bookInput} />
            </View>

            <TextInput
              placeholder="Enter Purpose of Trip"
              style={styles.bookTextarea}
              multiline
            />

            <TouchableOpacity style={styles.bookSubmitButton}>
              <Text style={styles.bookSubmitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <BottomNav active="book" />
    </View>
  );
}
