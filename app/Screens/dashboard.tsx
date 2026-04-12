import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import type { ScrollView as RNScrollView } from "react-native";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomNav from "../components/BottomNav";
import styles from "../styles";

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
    <View style={styles.dashboardRoot}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.dashboardScrollRoot}
        contentContainerStyle={{ paddingBottom: 112 }}
      >
        <View style={styles.dashboardHeader}>
          <View style={styles.dashboardHeaderInner}>
            <Image
              source={require("../../assets/images/CapitolCab.png")}
              style={styles.dashboardLogo}
              resizeMode="contain"
            />
            <Text style={styles.dashboardTitle}>Homepage</Text>
          </View>
        </View>

        <View style={styles.dashboardBody}>
          <ScrollView
            ref={bannerRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.dashboardBannerGroup}
          >
            {bannerImages.map((image, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.dashboardBannerItem, { width: width - 40 }]}
              >
                <Image
                  source={{ uri: image }}
                  style={styles.dashboardBannerImage}
                />

                <View style={styles.dashboardBannerTag}>
                  <Text style={styles.dashboardBannerText}>⭐</Text>
                  <Text
                    style={[
                      styles.dashboardBannerText,
                      { marginLeft: 8, fontSize: 12 },
                    ]}
                  >
                    4.8 (12k Reviews)
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.dashboardCard}>
            <View
              style={[
                styles.dashboardCardIcon,
                styles.dashboardCardIconEmerald,
              ]}
            >
              <MaterialCommunityIcons
                name="book-open-page-variant-outline"
                size={28}
                color="#159A9C"
              />
            </View>

            <View>
              <Text style={styles.dashboardCardTitle}>User Manual</Text>
              <Text style={styles.dashboardCardSubtitle}>Read the guide</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.dashboardCard, { marginBottom: 24 }]}
          >
            <View
              style={[styles.dashboardCardIcon, styles.dashboardCardIconOrange]}
            >
              <Ionicons name="bag-outline" size={26} color="#E58B00" />
            </View>

            <View>
              <Text style={styles.dashboardCardTitle}>Travel Status</Text>
              <Text style={styles.dashboardCardSubtitle}>View Status</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.dashboardMapCard}>
            <Image
              source={{
                uri: "https://maps.googleapis.com/maps/api/staticmap?center=Philippines&zoom=8&size=600x300&maptype=satellite",
              }}
              style={styles.dashboardMapImage}
            />
          </View>
        </View>
      </ScrollView>

      <BottomNav active="home" />
    </View>
  );
}
