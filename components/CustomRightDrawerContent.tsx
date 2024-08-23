import {
  DrawerContentScrollView,
  DrawerContentComponentProps,DrawerItem
} from "@react-navigation/drawer";
import { useRouter, useSegments } from "expo-router";
export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  const router = useRouter();
  const segments = useSegments();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        focused={
          (segments[0] === "multidrawer" &&
            segments[1] === "(left)" &&
            !segments[2]) ||
          (segments[0] === "multidrawer" &&
            segments[1] === "(left)" &&
            segments[2] === "drawer1")
        }
        to="/multidrawer/(left)/drawer1"
        label={"Drawer 1"}
        onPress={() => {
          router.push("/multidrawer/(left)/drawer1");
        }}
      />
      <DrawerItem
        focused={
          segments[0] === "multidrawer" &&
          segments[1] === "(left)" &&
          segments[2] === "drawer2"
        }
        to="/multidrawer/(left)/drawer2"
        label={"Drawer 2"}
        onPress={() => {
          router.push("/multidrawer/(left)/drawer2");
        }}
      />
    </DrawerContentScrollView>
  );
}
