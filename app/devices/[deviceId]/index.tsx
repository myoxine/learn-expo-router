import { useLocalSearchParams, useRouter, Link } from "expo-router";
import { Button } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
export default function Device() {
  const router = useRouter();
  const { deviceId } = useLocalSearchParams<{ deviceId: string }>();
  return (
    <ThemedView style={styles.container}>
      <Link href="/devices">
        <ThemedText type="link">Back</ThemedText>
      </Link>
      <ThemedText>{`This is the page of device ${deviceId}`}</ThemedText>
      <Button
        onPress={() => router.push({ pathname: `/devices/${deviceId}/edit` })}
        title="Edit"
      />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
