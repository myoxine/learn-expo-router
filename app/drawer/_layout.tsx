import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer> 
        <Drawer.Screen
          name="drawer1" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Drawer 1',
            title: 'Drawer 1',
          }}
        />
        <Drawer.Screen
          name="drawer2" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Drawer 2',
            title: 'Drawer 2',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
