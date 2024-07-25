import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import useUserGlobalStore from '../../store/useUserGlobalStore';
import {Box, Text} from '../';
import CustomDrawerItem from './CustomDrawerItem';
import DrawerCard from './DrawerCard';

const MyDrawer = ({props}: {props: DrawerContentComponentProps}) => {
  const {updateUser, user} = useUserGlobalStore();
  return (
    <Box p="4" flex={1}>
      <Box height={24} />
      <DrawerCard user={user!} />
      <Box height={24} />
      <CustomDrawerItem
        label="Dashboard"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
      <CustomDrawerItem
        label="Groups"
        onPress={() => {
          props.navigation.navigate('Groups');
        }}
      />
      <CustomDrawerItem
        label="Create Group"
        onPress={() => {
          props.navigation.navigate('CreateGroups');
        }}
      />
      <CustomDrawerItem
        label="Logout"
        onPress={() => {
          updateUser(null);
        }}
      />
    </Box>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({});
