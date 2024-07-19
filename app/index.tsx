import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This is home screen .</ThemedText>
        <Link href="/Another" style={styles.link}>
          <ThemedText type="link">Go to another screen!</ThemedText>
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
