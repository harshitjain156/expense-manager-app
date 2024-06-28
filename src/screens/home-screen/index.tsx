import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import SafeAreaWrapper from '../../components/shared/SafeAreaWrapper';
import Header from '../../components/shared/Header';
import Welcome from './components/Welcome';
import RecentTransactions from './components/RecentTransactions';
import ViewGroup from './components/ViewGroup';
import TotalAmount from './components/TotalAmount';
import ExpenseGraph from './components/ExpenseGraph';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamList} from '../../navigation/type';

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
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;


