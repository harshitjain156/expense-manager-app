import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Text} from '../../../utils/theme';
import Header from '../../../components/shared/header';

import {ScrollView} from 'react-native-gesture-handler';
import GroupCard from './components/group-card';
import CreateGroupCard from './components/create-group';

const GroupListScreen = ({navigation}: {navigation: any}) => {
  return (
    <Box flex={1}>
      <Header
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <ScrollView>
        <Box m="4">
          <Box>
            <Text variant="text2Xl" fontWeight={900}>
              Your Groups,
            </Text>
          </Box>
          <Box height={16} />
          <GroupCard />
          <Box height={16} />
          <CreateGroupCard />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default GroupListScreen;

const styles = StyleSheet.create({});
