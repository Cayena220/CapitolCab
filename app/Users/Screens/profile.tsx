import { Ionicons } from "@expo/vector-icons";
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
import styles from "../../styles";
import BottomNav from "../components/BottomNav";

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
  const [showDateModal, setShowDateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState("Emily Johnson");
  const [email, setEmail] = useState("emily.j@email.com");

  const upcomingDates = Array.from({ length: 7 }, (_, index) => {
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + index);
    return new Date(nextDate);
  });

  return (
    <View style={styles.profileScreen}>
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

      <Modal
        animationType="slide"
        transparent
        visible={showDateModal}
        onRequestClose={() => setShowDateModal(false)}
      >
        <View style={styles.profileModalOverlay}>
          <View style={styles.profileModal}>
            <Text style={styles.profileModalHeaderText}>Choose a date</Text>
            <View style={styles.profileCalendarGrid}>
              {upcomingDates.map((date) => {
                const label = date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
                const isSelected =
                  date.toDateString() === selectedDate.toDateString();

                return (
                  <TouchableOpacity
                    key={label}
                    style={[
                      styles.profileDateCell,
                      isSelected && styles.profileDateCellSelected,
                    ]}
                    onPress={() => {
                      setSelectedDate(date);
                      setShowDateModal(false);
                    }}
                  >
                    <Text style={styles.profileDateCellText}>{label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <TouchableOpacity
              style={styles.profileDateCloseButton}
              onPress={() => setShowDateModal(false)}
            >
              <Text style={styles.profileDateCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.profileHeader}>
        <Text style={styles.profileHeaderTitle}> User Profile</Text>
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

          <TouchableOpacity
            style={styles.profileMenuItem}
            onPress={() => setShowDateModal(true)}
          >
            <Text style={styles.profileMenuText}>Set Date</Text>
            <View style={styles.profileMenuTrailingRow}>
              <Text style={styles.profileMenuTrailing}>
                {selectedDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </Text>
              <Ionicons
                name="calendar-outline"
                size={18}
                color="#047857"
                style={{ marginLeft: 8 }}
              />
            </View>
          </TouchableOpacity>

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
