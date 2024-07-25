import {ScrollView} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  ExpenseGraph,
  RecentTransactions,
  TotalAmount,
  ViewGroup,
  Welcome,
} from './components';
import {Box, Header, SafeAreaWrapper, Text} from '../../../components';
import {MONTHLY_EXPENSE} from '../../../utils/constants';
import useSWRMutation from 'swr/mutation';
import {getExpenseData} from '../../../services/expenseapi';
import useUserGlobalStore from '../../../store/useUserGlobalStore';
import {
  CompositeNavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {DrawerTabScreenProps, GroupsParamList} from '../../../navigation/type';

type HomeScreenNavigationProp = DrawerTabScreenProps<'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {trigger, isMutating} = useSWRMutation(MONTHLY_EXPENSE, getExpenseData);

  const {user} = useUserGlobalStore();
  const [totalMonthlyExpense, setTotalMonthlyExpense] =
    useState<ITotalMonthlyExpense>();
  const getData = async () => {
    const res = await trigger({
      user: user?.email!,
    });
    setTotalMonthlyExpense(res.data[0]);
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );
  return (
    <SafeAreaWrapper>
      <Header
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <ScrollView>
        <Box p="4">
          <Welcome
            onPress={() => {
              navigation.navigate('Groups', {screen: 'GroupList'});
            }}
          />
          <TotalAmount totalMonthlyExpense={totalMonthlyExpense!} />
          <ExpenseGraph />
          <RecentTransactions />
          <ViewGroup
            onPress={() => {
              navigation.navigate('Groups', {screen: 'GroupList'});
            }}
          />
        </Box>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
