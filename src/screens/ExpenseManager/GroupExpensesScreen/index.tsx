/* eslint-disable prettier/prettier */
import React, {useCallback, useState} from 'react';
import {
  Box,
  Card,
  CustomPieChart,
  Loader,
  SafeAreaWrapper,
  Text,
  TransactionCard,
} from '../../../components';
import {PieChart, pieDataItem} from 'react-native-gifted-charts';
import useSWRMutation from 'swr/mutation';
import {
  GET_GROUP_CATEGORY_EXPENSE,
  GET_GROUP_EXPENSE,
} from '../../../utils/constants';
import {getExpenseData} from '../../../services/expenseapi';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {ChartColor} from '../../../types/enums';
import {Modal, TouchableOpacity} from 'react-native';
type ChartDataType = {
  amount: number;
  _id: string;
};
const GroupExpenses = () => {
  const route = useRoute();
  const [categories, setCategories] = useState<pieDataItem[]>([]);
  const group: IGroup = route.params as IGroup;
  const {trigger: getCategories, isMutating} = useSWRMutation(
    GET_GROUP_CATEGORY_EXPENSE,
    getExpenseData,
  );
  const {trigger: getGroupExpense, isMutating: isExpenseLoading} =
    useSWRMutation(GET_GROUP_EXPENSE, getExpenseData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [transaction, setTransactions] = useState<ITransactions[]>([]);
  const getCategoryExpense = async () => {
    await getCategories({id: group._id})
      .then(res => {
        const chartData: pieDataItem[] = res.data.map((item: ChartDataType) => {
          return {
            value: item.amount,
            color: ChartColor[item._id as keyof typeof ChartColor],
            text: item._id,
          };
        });
        setCategories(chartData);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
      });
  };
  const getGroupTransactions = async () => {
    await getGroupExpense({id: group._id})
      .then(res => {
        setTransactions(res.expense);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
      });
  };
  useFocusEffect(
    useCallback(() => {
      getGroupTransactions();
      getCategoryExpense();
    }, []),
  );

  if (isLoading) {
    return <Loader />;
  }
  return (
    <SafeAreaWrapper>
      {transaction.length == 0 && categories.length == 0 ? (
        <Box flex={1} height={300} justifyContent="center">
          <Text textAlign="center">Please add transactions</Text>
        </Box>
      ) : (
        <Box justifyContent="center" alignItems="center">
          <CustomPieChart
            label="Category Expense Chart"
            categories={categories}
          />
          <Card flex={1} variant="elevated" p="2" backgroundColor="white">
            <Text mb="4" variant="textXl" fontWeight={900}>
              Group Recent Transactions
            </Text>

            {transaction.map((item, index) => {
              return <TransactionCard key={item._id} transaction={item} />;
            })}
          </Card>
        </Box>
      )}
    </SafeAreaWrapper>
  );
};

export default GroupExpenses;
