import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function TabLayout() {
  return (
    <Tabs initialRouteName="nested1" screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="nested1"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="times-rectangle-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="nested2"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="thermometer-0" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
