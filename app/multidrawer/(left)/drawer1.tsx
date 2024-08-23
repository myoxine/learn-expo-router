import { StyleSheet, Button } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
//import { drawer1Props } from "./_layout";
import { Link, useNavigation } from "expo-router";
export default function Drawer1() {
  const navigation = useNavigation<any>();
  return (
    <ThemedView style={styles.container}>
      <Button
        onPress={() => navigation.openDrawer()}
        title="Open left drawer"
      />
      <Button
        onPress={() => navigation.getParent().openDrawer()}
        title="Open right drawer"
      />
      <ThemedText>This screen drawer 1</ThemedText>
      <Link href="/multidrawer/(left)/drawer2" style={styles.link}>
        <ThemedText type="link">Go to multi drawer screen 2!</ThemedText>
      </Link>
      <Link href="/multidrawer/(left)/drawer3" style={styles.link}>
        <ThemedText type="link">Go to multi drawer screen 3!</ThemedText>
      </Link>
      <Link href="/multidrawer/(left)/drawer4" style={styles.link}>
        <ThemedText type="link">Go to multi drawer screen 4!</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
