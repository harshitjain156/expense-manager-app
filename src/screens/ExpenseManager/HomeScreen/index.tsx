import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamList} from '../../../navigation/type';
import {
  ExpenseGraph,
  RecentTransactions,
  TotalAmount,
  ViewGroup,
  Welcome,
} from './components';
import {Box, Header, SafeAreaWrapper, Text} from '../../../components';

const HomeScreen = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<DrawerParamList>;
}) => {
  return (
    <SafeAreaWrapper>
      <Header
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <ScrollView>
        <Box p='4'>

        <Welcome
          onPress={() => {
            navigation.navigate('Groups');
          }}
        />
        <TotalAmount />
        <ExpenseGraph />
        <RecentTransactions />
        <ViewGroup
          onPress={() => {
            navigation.navigate('Groups');
          }}
        />
            </Box>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
