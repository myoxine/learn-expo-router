import React from "react";
import { Button, Pressable } from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
export default function Edit() {
  const router = useRouter();
  const { deviceId } = useLocalSearchParams<{ deviceId: string }>();
  return (
    <ThemedView style={styles.container}>
      <Button onPress={() => router.back()} title="Back" />
      <ThemedText>{`This is the device ${deviceId} editing page `}</ThemedText>
      <ThemedView style={styles.containerList}>
        {new Array(5).fill(0).map((_, index) => {
          return (
            <Link
              key={index}
              href={{ pathname: `devices/${deviceId}/edit/${index}` }}
              asChild
            >
              <Pressable>
                <ThemedView style={styles.containerEdit}>
                  <ThemedText>{index}</ThemedText>
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
  containerEdit: {
    height: 50,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
