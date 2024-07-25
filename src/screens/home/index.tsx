import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamList} from '../../navigation/type';
import {
  ExpenseGraph,
  RecentTransactions,
  TotalAmount,
  ViewGroup,
  Welcome,
} from './components';
import {Header, SafeAreaWrapper} from '../../components';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const Home = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<DrawerParamList>;
}) => {
  return (
    <SafeAreaWrapper>
      {/* <Header
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <ScrollView>
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
      </ScrollView> */}
      <View></View>
    </SafeAreaWrapper>
  );
};

export default Home;
