import {  Platform } from 'react-native';
import { Link, router,Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  return (
    <>
    <Stack.Screen options={{ title: "Modal" }} />
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="/">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS. Set the status bar to light content and add a fallback for other platforms with auto. */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemedView>
    </>
  );
}
