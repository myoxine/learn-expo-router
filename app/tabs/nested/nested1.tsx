import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
export default function TabNested1() {
  return (
    <ThemedView style={styles.container}>
      <Link href="/tabs/nested/nested2" style={styles.link}>
        <ThemedText type="link">Go to Nested 2!</ThemedText>
      </Link>
      <ThemedText>Tab Nested 1</ThemedText>
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
