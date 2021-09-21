import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const image =
  'https://media.istockphoto.com/vectors/abstract-orange-vector-background-with-stripes-can-be-used-for-cover-vector-id1156933854?b=1&k=20&m=1156933854&s=612x612&w=0&h=yFWlxtdclffGf1zNvDCb5YyD4leGZLs3jUdfQPQlyFk=';
export function DrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={{ uri: image }} style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            size={50}
          />
          <Title style={styles.title}>David Junqueira</Title>
          <Caption style={styles.caption}>@trensik</Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                202
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                159
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>
      </ImageBackground>
      <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          )}
          label="Profile"
          onPress={() => {}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="tune" color={color} size={size} />
          )}
          label="Preferences"
          onPress={() => {}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="bookmark-outline"
              color={color}
              size={size}
            />
          )}
          label="Bookmarks"
          onPress={() => {}}
        />
      </Drawer.Section>
      <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          )}
          label="Profile"
          onPress={() => {}}
        />
      </Drawer.Section>
      <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          )}
          label="Profile"
          onPress={() => {}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="tune" color={color} size={size} />
          )}
          label="Preferences"
          onPress={() => {}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="bookmark-outline"
              color={color}
              size={size}
            />
          )}
          label="Bookmarks"
          onPress={() => {}}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    marginTop: -35,
  },
  userInfoSection: {
    paddingTop: 40,
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
