import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  return (
    <DrawerContentScrollView {...props}>
      <ThemedView>
        <ThemedText>This Custom Content Drawer</ThemedText>
      </ThemedView>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
