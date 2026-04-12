import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";

type BottomNavProps = {
  active: "home" | "trip" | "notification" | "chat" | "profile";
};

const navItems: Array<{
  key: BottomNavProps["active"];
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
}> = [
  {
    key: "home",
    label: "Home",
    icon: "home-outline",
    route: "/driver/Screens/dashboard",
  },
  {
    key: "trip",
    label: "Trips",
    icon: "car-outline",
    route: "/driver/Screens/trip",
  },
  {
    key: "notification",
    label: "Notification",
    icon: "notifications-outline",
    route: "/driver/Screens/notification",
  },
  {
    key: "chat",
    label: "Chat",
    icon: "chatbubble-outline",
    route: "/driver/Screens/chat",
  },
  {
    key: "profile",
    label: "Profile",
    icon: "person-outline",
    route: "/driver/Screens/profile",
  },
];

export default function DriverBottomNav({ active }: BottomNavProps) {
  const router = useRouter();

  return (
    <View style={styles.dashboardTabBar}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={styles.dashboardTabItem}
          onPress={() => router.push(item.route as any)}
        >
          <Ionicons
            name={item.icon}
            size={22}
            color={active === item.key ? "#16a34a" : "#666"}
          />
          <Text
            style={
              active === item.key
                ? styles.dashboardTabTextActive
                : styles.dashboardTabText
            }
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
