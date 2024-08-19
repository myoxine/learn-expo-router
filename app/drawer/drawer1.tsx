import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
export default function Drawer2() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>This screen drawer 1</ThemedText>
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
