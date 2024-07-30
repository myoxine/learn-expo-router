import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Another2() {
  return (
    <>
    <Stack.Screen options={{ title: 'Another 2!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This is another screen 2.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to Home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
