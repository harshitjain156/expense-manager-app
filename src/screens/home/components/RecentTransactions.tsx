import React, {useEffect, useState} from 'react';
import TransactionCard from '../../../components/expense/TransactionCard';
import useSWRMutation from 'swr/mutation';
import {getExpenseData} from '../../../services/expenseapi';
import useUserGlobalStore from '../../../store/useUserGlobalStore';
import {RECENT_TRANSACTIONS} from '../../../utils/constants';
import {Box, Text} from '../../../components';

const RecentTransactions = () => {
  const {trigger, isMutating} = useSWRMutation(
    RECENT_TRANSACTIONS,
    getExpenseData,
  );
  const {user} = useUserGlobalStore();
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  const getData = async () => {
    const res = await trigger({
      user: user?.email!,
    });
    setTransactions(res?.expense ?? []);
  };
  useEffect(() => {
    getData();
  }, []);

  if (!(transactions.length > 0)) {
    return null;
  }
  return (
    <Box
      elevation={2}
      m="4"
      p="2"
      backgroundColor="white"
      borderRadius="rounded-3xl">
      <Text mb="4" variant="textXl" fontWeight={900}>
        Your Recent Transactions
      </Text>

      {transactions.map((item, index) => {
        return <TransactionCard key={index} transaction={item} />;
      })}
    </Box>
  );
};

export default RecentTransactions;
