import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import useUserGlobalStore from '../../store/useUserGlobalStore';
import { Box, Text } from '../';
import CustomDrawerItem from './CustomDrawerItem';

const MyDrawer = ({props}: {props: DrawerContentComponentProps}) => {
  const {updateUser, user} = useUserGlobalStore();
  return (
    <Box p="4" flex={1}>
      <Box height={24} />
      <Box bg="blu200" flexDirection="row" p="4" borderRadius="rounded-3xl">
        <Box height={60} width={60} bg="green200" borderRadius="rounded-9xl">
          <Image
            source={require('../../assets/mock-images/avatar.png')}
            style={{
              resizeMode: 'contain',
              height: 60,
              width: 60,
            }}
          />
        </Box>
        <Box width={14} />
        <Box justifyContent="center">
          <Text variant="textBase" fontWeight={900}>
            {user?.firstName} {user?.lastName}
          </Text>
          <Text variant="textXs" color="grey">
            {user?.email}
          </Text>
        </Box>
      </Box>
      <Box height={24} />
      <CustomDrawerItem label='Dashboard'  onPress={() => {
          props.navigation.navigate('Home');
        }}/>
      <CustomDrawerItem label='Groups'  onPress={() => {
          props.navigation.navigate('Groups');
        }}/>
      <CustomDrawerItem label='Create Group'  onPress={() => {
          props.navigation.navigate('CreateGroups');
        }}/>
      <CustomDrawerItem label='Logout'  onPress={() => {
          updateUser(null);
        }}/>
      <Box
        position="absolute"
        bottom={20}
        bg="red200"
        alignItems="center"
        left={0}
        right={0}>
        <Text variant="textXs">SplitApp | Open Source</Text>
      </Box>
    </Box>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({});
