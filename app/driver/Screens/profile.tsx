import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles";
import DriverBottomNav from "../components/BottomNav";

export default function DriverProfile() {
  return (
    <View style={styles.profileScreen}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileHeaderTitle}>Driver Profile</Text>
      </View>

      <ScrollView
        style={styles.profileContent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 112 }}
      >
        <View style={styles.profileCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
            }}
            style={styles.profileAvatar}
          />
          <Text style={styles.profileName}>Rodel A. Taclado</Text>
          <Text style={styles.profileEmail}>rodela.driver@example.com</Text>
          <TouchableOpacity style={styles.profileEditButton}>
            <Text style={styles.profileEditButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileMenu}>
          <View style={styles.profileMenuItem}>
            <View>
              <Text style={styles.profileMenuText}>Vehicle</Text>
              <Text style={styles.profileMenuTrailing}>Toyota Innova</Text>
            </View>
          </View>
          <View style={styles.profileMenuItem}>
            <View>
              <Text style={styles.profileMenuText}>Plate Number</Text>
              <Text style={styles.profileMenuTrailing}>ABC-1234</Text>
            </View>
          </View>
          <View style={styles.profileMenuItem}>
            <View>
              <Text style={styles.profileMenuText}>License</Text>
              <Text style={styles.profileMenuTrailing}>
                Valid until 03/2027
              </Text>
            </View>
          </View>
          <View style={styles.profileMenuItem}>
            <View>
              <Text style={styles.profileMenuText}>Rating</Text>
              <Text style={styles.profileMenuTrailing}>4.9 / 5</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.profileLogoutButton}>
            <Text style={styles.profileLogoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <DriverBottomNav active="profile" />
    </View>
  );
}
