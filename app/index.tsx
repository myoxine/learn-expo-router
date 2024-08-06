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
        {/* <Link href="/(another)/Another" style={styles.link}>
          <ThemedText type="link">Go to another screen!</ThemedText>
        </Link>
        <Link href="/(another)/Another2" style={styles.link}>
          <ThemedText type="link">Go to another screen 2!</ThemedText>
        </Link> */}
        <Link href="/devices" style={styles.link}>
          <ThemedText type="link">Go to devices screen!</ThemedText>
        </Link>
        <Link href="/tabs" style={styles.link}>
          <ThemedText type="link">Go to tabs screen!</ThemedText>
        </Link>
        <Link href="/modal" style={styles.link}><ThemedText type="link">Present modal</ThemedText></Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

});
