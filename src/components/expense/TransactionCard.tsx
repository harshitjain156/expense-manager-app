import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Month} from '../../types/enums';
import { Box, Text } from '../theme';

const TransactionCard = ({transaction}: {transaction: ITransactions}) => {
  const date = new Date(transaction.expenseDate);
  const month = date.getUTCMonth();

  return (
    <Box
      mt="2"
      shadowColor={'gray700'}
      bg="white"
      justifyContent="space-between"
      elevation={2}
      borderRadius="rounded-3xl"
      flexDirection="row"
      p="2">
      <Box flexDirection="row">
        <Box
          borderRadius="rounded-9xl"
          height={80}
          width={80}
          bg="red50"
          justifyContent="center"
          alignItems="center">
          <Text variant="textXl" lineHeight={20} fontWeight={900}>
            {24}
          </Text>
          <Text variant="textXl" lineHeight={20}>
            {Month[month + 1]}
          </Text>
        </Box>
        <Box width={16} />
        <Box>
          <Text variant="textBase" color="blu500" fontWeight={900}>
            My Expense
          </Text>
          <Text variant="textBase" color="blu500" fontWeight={700}>
            Total: Rs. {transaction.expenseAmount}
          </Text>
          <Text variant="textXs">Paid by</Text>
          <Text variant="textXs">{transaction.expenseOwner}</Text>
        </Box>
      </Box>
      <Box alignItems="center" justifyContent="center">
        <Text variant="textBase" color="red800" fontWeight={900}>
          Per Person
        </Text>
        <Text variant="textBase" color="red800" fontWeight={700}>
          Rs. {transaction.expensePerMember}
        </Text>
      </Box>
    </Box>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({});
