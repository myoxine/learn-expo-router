import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import React from "react";

export default function Setting() {
  const router = useRouter();
  const { deviceId, settingId } = useLocalSearchParams<{
    deviceId: string;
    settingId: string;
  }>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => router.back()} title="Back" />

      <Text>{`This is the page of device  ${deviceId}`}</Text>
      <Text>{`This is the page of settings  ${settingId}`}</Text>
    </View>
  );
}
