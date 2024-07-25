import React, {useEffect, useState} from 'react';
import useSWRMutation from 'swr/mutation';
import {getExpenseData} from '../../../../services/expenseapi';
import useUserGlobalStore from '../../../../store/useUserGlobalStore';
import {Month} from '../../../../types/enums';
import {DAILY_EXPENSE} from '../../../../utils/constants';
import {Box, CustomLineChart, Loader} from '../../../../components';
const ExpenseGraph = () => {
  const {trigger, isMutating} = useSWRMutation(DAILY_EXPENSE, getExpenseData, {
    revalidate: true,
  });
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
  if (isMutating) {
    return <Loader />;
  }
  if (!dailyExpenses) {
    return null;
  }
  return (
    <Box>
      <CustomLineChart data={dailyExpenses} />
    </Box>
  );
};

export default ExpenseGraph;
