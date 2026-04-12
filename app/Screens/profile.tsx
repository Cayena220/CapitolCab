import { useState } from "react";
import {
    Image,
    Modal,
    ScrollView,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import BottomNav from "../components/BottomNav";
import styles from "../styles";

const menuItems = [
  { label: "Account Info" },
  { label: "Change Email" },
  { label: "Change Password" },
  { label: "Notification Settings" },
  { label: "Privacy Settings" },
  { label: "Language", trailing: "English" },
];

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [name, setName] = useState("Emily Johnson");
  const [email, setEmail] = useState("emily.j@email.com");

  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent
        visible={showEditModal}
        onRequestClose={() => setShowEditModal(false)}
      >
        <View style={styles.profileModalOverlay}>
          <View style={styles.profileModal}>
            <Text style={styles.profileModalHeaderText}>Edit Profile</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.profileModalInput}
              placeholder="Name"
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.profileModalInput}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View style={styles.profileModalButtonsRow}>
              <TouchableOpacity
                style={[
                  styles.profileModalButton,
                  styles.profileModalCancelButton,
                ]}
                onPress={() => setShowEditModal(false)}
              >
                <Text style={styles.profileModalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profileModalButton}
                onPress={() => setShowEditModal(false)}
              >
                <Text style={styles.profileModalButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.profileHeader}>
        <Text style={styles.profileHeaderTitle}>Profile Settings</Text>
      </View>

      <ScrollView
        style={styles.profileContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=256&q=80",
            }}
            style={styles.profileAvatar}
          />
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
          <TouchableOpacity
            style={styles.profileEditButton}
            onPress={() => setShowEditModal(true)}
          >
            <Text style={styles.profileEditButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileMenu}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.label} style={styles.profileMenuItem}>
              <Text style={styles.profileMenuText}>{item.label}</Text>
              <Text style={styles.profileMenuTrailing}>
                {item.trailing || ""}
              </Text>
            </TouchableOpacity>
          ))}

          <View style={styles.profileMenuItem}>
            <View>
              <Text style={styles.profileMenuText}>Dark Mode</Text>
              <Text style={styles.profileMenuTrailing}>
                Toggle app appearance
              </Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              thumbColor={darkMode ? "#10b981" : "#f4f3f4"}
              trackColor={{ false: "#d1d5db", true: "#a7f3d0" }}
            />
          </View>

          <TouchableOpacity style={styles.profileMenuItem}>
            <Text style={styles.profileMenuText}>Language</Text>
            <Text style={styles.profileMenuTrailing}>English</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.profileLogoutButton}>
          <Text style={styles.profileLogoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav active="profile" />
    </View>
  );
}
