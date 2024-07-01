import React, {useEffect, useState} from 'react';
import {Box, Text} from '../../../../utils/theme';
import useSWRMutation from 'swr/mutation';
import useUserGlobalStore from '../../../../store/useUserGlobalStore';
import {getExpenseData} from '../../../../services/expenseapi';
import { MONTHLY_EXPENSE } from '../../../../utils/constants';

const TotalAmount = () => {
  const {trigger, isMutating} = useSWRMutation(
    MONTHLY_EXPENSE,
    getExpenseData,{
      revalidate:true
    }
  );

  const {user} = useUserGlobalStore();
  const [totalMonthlyExpense, setTotalMonthlyExpense] =
    useState<ITotalMonthlyExpense>();
  const getData = async () => {
    const res = await trigger({
      user: user?.email!,
    });
    setTotalMonthlyExpense(res.data[0]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      elevation={2}
      m="4"
      p="6"
      backgroundColor="sky200"
      borderRadius="rounded-3xl">
      <Box flexDirection="row">
        <Box
          borderRadius="rounded-9xl"
          height={60}
          width={60}
          bg="blu700">
            {/* =======This box is for icon ========== */}
          </Box>
        <Box width={16} />
        <Box flexDirection="column">
          <Text variant="textXl" color="blu700">
            Total
          </Text>
          <Text variant="text2Xl" fontWeight={700} color="blu700">
            Rs.{totalMonthlyExpense?.amount ?? 0}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TotalAmount;
