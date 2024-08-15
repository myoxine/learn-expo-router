import { useLocalSearchParams, useRouter, Link } from "expo-router";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
export default function Dynamic() {
  const { dynamic } = useLocalSearchParams<{ dynamic: string }>();
  return (
    <ThemedView style={styles.container}>
      <ThemedText>{`This is the page of dynamic ${dynamic}`}</ThemedText>
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
