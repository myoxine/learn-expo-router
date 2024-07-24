import { useLocalSearchParams, useRouter,Link } from "expo-router";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
export default function Setting() {
  const router = useRouter();
  const { deviceId, settingId } = useLocalSearchParams<{
    deviceId: string;
    settingId: string;
  }>();
  return (
    <ThemedView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href={`devices/${deviceId}/edit`}>
        <ThemedText type="link">Back</ThemedText>
      </Link>
      <ThemedText>{`This is the page of device  ${deviceId}`}</ThemedText>
      <ThemedText>{`This is the page of settings  ${settingId}`}</ThemedText>
    </ThemedView>
  );
}
