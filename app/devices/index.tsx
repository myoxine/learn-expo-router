import React from "react";
import { Button, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
export default function Devices() {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <Button onPress={() => router.back()} title="Back" />
      <ThemedText>This is the list of devices</ThemedText>
      <ThemedView style={styles.containerList}>
        {new Array(5).fill(0).map((_, index) => {
          return (
            <Link key={index} href={{ pathname: `devices/${index}` }} asChild>
              <Pressable>
                <ThemedView style={styles.containerDevice}>
                  <ThemedText>Device {index}</ThemedText>
                </ThemedView>
              </Pressable>
            </Link>
          );
        })}
      </ThemedView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerList: {
    gap: 5,
    width: "100%",
  },
  containerDevice: {
    height: 50,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
