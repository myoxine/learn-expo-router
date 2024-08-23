import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomRightDrawerContent from "@/components/CustomRightDrawerContent"
export default function RightLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        id="LeftDrawer"
        screenOptions={{ drawerPosition: "right", headerShown: false }}
        drawerContent={CustomRightDrawerContent}
      >
        <Drawer.Screen name="(left)" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
