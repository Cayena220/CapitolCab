import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function LoadingScreen() {
  return (
    <View style={styles.loadingRoot}>
      <Image
        source={require("../assets/images/CapitolCab.png")}
        style={styles.loadingLogo}
        resizeMode="contain"
      />

      <View style={styles.loadingSkeletonContainer}>
        <View style={styles.loadingSkeletonBlock} />
        <View
          style={[styles.loadingSkeletonBlock, styles.loadingSkeletonWide]}
        />
        <View
          style={[styles.loadingSkeletonBlock, styles.loadingSkeletonSmall]}
        />
      </View>

      <Text style={styles.loadingText}>Loading CapitolCab...</Text>
    </View>
  );
}
