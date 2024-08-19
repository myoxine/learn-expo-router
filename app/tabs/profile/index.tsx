import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
export default function TabProfile() {
  return (
    <ThemedView style={styles.container}>
      <Link href="/tabs/profile/detail" style={styles.link}>
        <ThemedText type="link">Go to Detail Profile!</ThemedText>
      </Link>
      <ThemedText>Tab Profile</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
