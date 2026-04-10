import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Dashboard() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Homepage</Text>
          <Text style={styles.time}>09:30 PM</Text>
        </View>

        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Banner */}
        <TouchableOpacity style={styles.bannerCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            }}
            style={styles.bannerImage}
          />
          <View style={styles.ratingRow}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.ratingText}>4.8 (12k Reviews)</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionCard, styles.manualCard]}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              size={28}
              color="#159A9C"
            />
          </View>

          <View>
            <Text style={styles.cardTitle}>User Manual</Text>
            <Text style={styles.cardSubtitle}>Read the guide</Text>
          </View>
        </TouchableOpacity>

        {/* Travel Status */}
        <TouchableOpacity style={[styles.actionCard, styles.travelCard]}>
          <View style={styles.iconCircle}>
            <Ionicons name="bag-outline" size={26} color="#E58B00" />
          </View>

          <View>
            <Text style={styles.cardTitle}>Travel Status</Text>
            <Text style={styles.cardSubtitle}>View Status</Text>
          </View>
        </TouchableOpacity>

        {/* Map */}
        <View style={styles.mapCard}>
          <Image
            source={{
              uri: "https://maps.googleapis.com/maps/api/staticmap?center=Philippines&zoom=8&size=600x300&maptype=satellite",
            }}
            style={styles.mapImage}
          />
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={22} color="#16a34a" />
          <Text style={[styles.navText, styles.activeNav]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("../screens/book")}
        >
          <Ionicons name="book-outline" size={22} color="#666" />
          <Text style={styles.navText}>Book</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications-outline" size={22} color="#666" />
          <Text style={styles.navText}>Notification</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={22} color="#666" />
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B6E3E",
  },

  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },

  time: {
    marginTop: 6,
    color: "#d1fae5",
    fontSize: 12,
  },

  profileButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  scrollContent: {
    backgroundColor: "#f4f4f4",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
    paddingBottom: 120,
  },

  bannerCard: {
    marginBottom: 24,
  },

  bannerImage: {
    width: "100%",
    height: 150,
    borderRadius: 18,
  },

  ratingRow: {
    position: "absolute",
    bottom: 12,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },

  star: {
    fontSize: 14,
    marginRight: 6,
  },

  ratingText: {
    color: "#fff",
    fontSize: 13,
  },

  actionCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 18,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  manualCard: {
    backgroundColor: "#2ED1D3",
  },

  travelCard: {
    backgroundColor: "#F6A313",
  },

  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  cardSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#333",
  },

  mapCard: {
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 10,
  },

  mapImage: {
    width: "100%",
    height: 200,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 8,
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 11,
    color: "#666",
    marginTop: 4,
  },

  activeNav: {
    color: "#16a34a",
    fontWeight: "700",
  },
});
