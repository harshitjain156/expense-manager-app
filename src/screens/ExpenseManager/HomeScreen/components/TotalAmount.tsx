import React, {useEffect, useState} from 'react';
import useSWRMutation from 'swr/mutation';
import useUserGlobalStore from '../../../../store/useUserGlobalStore';
import {getExpenseData} from '../../../../services/expenseapi';
import {MONTHLY_EXPENSE} from '../../../../utils/constants';
import {Box, Card, Text} from '../../../../components';
import { convertToCurrency } from '../../../../utils/helpers';
import { Icon } from 'react-native-elements';

const TotalAmount = ({totalMonthlyExpense}:{totalMonthlyExpense:ITotalMonthlyExpense}) => {


  return (
    <Card variant="elevated" p="6" backgroundColor="sky200">
      <Box flexDirection="row">
        <Box borderRadius="rounded-9xl" justifyContent='center' height={60} width={60} bg="blu700">
        <Icon name={'clipboard-notes'} color={'white'} size={30} type="foundation"  />
        </Box>
        <Box width={16} />
        <Box flexDirection="column">
          <Text variant="textXl" color="blu700">
            Total
          </Text>
          <Text variant="text2Xl" fontWeight={700} color="blu700">
            Rs.{convertToCurrency(totalMonthlyExpense?.amount??0)}
          </Text>
        </Box>
      </Box>
    </Card>
  );
};

export default TotalAmount;
