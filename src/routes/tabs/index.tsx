/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import { Button, View } from 'react-native';
import Home from '../../pages/Home';
import { DrawerContent } from '../DrawerContent';

function NotificationsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Tabs() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={() => <DrawerContent />}
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

export default Tabs;
