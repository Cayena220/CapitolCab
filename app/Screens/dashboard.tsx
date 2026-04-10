import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import type { ScrollView as RNScrollView } from "react-native";
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

const bannerImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
];

export default function Dashboard() {
  const router = useRouter();
  const bannerRef = useRef<RNScrollView | null>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % bannerImages.length;
      bannerRef.current?.scrollTo({
        x: currentIndex.current * (width - 40 + 12),
        animated: true,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../../assets/images/CapitolCab.png")}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Text style={styles.headerTitle}>Homepage</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ScrollView
          ref={bannerRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.bannerScroll}
        >
          {bannerImages.map((image, index) => (
            <TouchableOpacity key={index} style={styles.bannerCard}>
              <Image source={{ uri: image }} style={styles.bannerImage} />

              <View style={styles.ratingRow}>
                <Text style={styles.star}>⭐</Text>
                <Text style={styles.ratingText}>4.8 (12k Reviews)</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

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

        <TouchableOpacity style={[styles.actionCard, styles.travelCard]}>
          <View style={styles.iconCircle}>
            <Ionicons name="bag-outline" size={26} color="#E58B00" />
          </View>

          <View>
            <Text style={styles.cardTitle}>Travel Status</Text>
            <Text style={styles.cardSubtitle}>View Status</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.mapCard}>
          <Image
            source={{
              uri: "https://maps.googleapis.com/maps/api/staticmap?center=Philippines&zoom=8&size=600x300&maptype=satellite",
            }}
            style={styles.mapImage}
          />
        </View>
      </ScrollView>

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
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 18,
    alignItems: "flex-start",
  },
  headerContent: {
    marginTop: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerLogo: {
    width: 120,
    height: 52,
    marginBottom: 4,
  },
  headerTitle: {
    marginLeft: 2,
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  time: {
    color: "#d1fae5",
    fontSize: 12,
    marginLeft: 2,
    marginTop: 4,
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
  bannerScroll: {
    marginBottom: 24,
  },
  bannerCard: {
    width: width - 40,
    marginRight: 12,
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
