import React, {useEffect, useState} from 'react';
import {Box, Text} from '../../../utils/theme';
import CustomLineChart from '../../../components/graphs/CustomLineChart';
import useSWRMutation from 'swr/mutation';
import {getExpenseData} from '../../../services/expenseapi';
import useUserGlobalStore from '../../../store/useUserGlobalStore';
import {Month} from '../../../types/enums';
import { DAILY_EXPENSE } from '../../../utils/constants';
import { Loader } from '../../../components';

const ExpenseGraph = () => {
  const {trigger, isMutating} = useSWRMutation(
    DAILY_EXPENSE,
    getExpenseData,
  );
  const {user} = useUserGlobalStore();
  const [dailyExpenses, setDailyExpenses] = useState<any>();
  const getData = async () => {
    const res = await trigger({
      user: user?.email!,
    });
    let data = {
      labels: res.data.map(
        (item: IDailyExpense) => `${item._id.date}-${Month[item._id.month]}`,
      ),
      datasets: [
        {
          data: res.data.map((item: IDailyExpense) => item.amount),
        },
      ],
    };

    setDailyExpenses(data);
    return data;
  };
  useEffect(() => {
    const data = getData();
  }, []);
  if (isMutating || !dailyExpenses) {
    return <Loader />;
  }
  return (
    <Box>
      <CustomLineChart data={dailyExpenses} />
    </Box>
  );
};

export default ExpenseGraph;
