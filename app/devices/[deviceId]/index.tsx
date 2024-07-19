import {  useLocalSearchParams,  useRouter} from "expo-router";
import { Button } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Device() {
  const router = useRouter();
  const { deviceId } = useLocalSearchParams<{ deviceId: string }>();
  return (
    <ThemedView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => router.back()} title="Back" />
      <ThemedText>{`This is the device ${deviceId} page `}</ThemedText>
    </ThemedView>
  );
}
