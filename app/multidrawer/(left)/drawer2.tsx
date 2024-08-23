import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
export default function Drawer2() {
  return (
    <ThemedView style={styles.container}>
      <Link href="/multidrawer/(left)/drawer1" style={styles.link}>
        <ThemedText type="link">Go to multi drawer screen 1!</ThemedText>
      </Link>
      <ThemedText>This screen drawer 2</ThemedText>
      <Link href="/multidrawer/(left)/drawer3" style={styles.link}>
        <ThemedText type="link">Go to multi drawer screen 3!</ThemedText>
      </Link>
      <Link href="/multidrawer/(left)/drawer4" style={styles.link}>
        <ThemedText type="link">Go to multi drawer screen 4!</ThemedText>
      </Link>
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
