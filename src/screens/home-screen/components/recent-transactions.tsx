import React from 'react'
import { Box, Text } from '../../../utils/theme'
import TransactionCard from '../../../components/expense/transaction-card'

const RecentTransactions = () => {
  return (
    <Box elevation={2} m='4' p='6' backgroundColor='white' borderRadius='rounded-3xl' >

          <Text mb='4' variant='textXl' fontWeight={900}>Your Recent Transactions</Text>

          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </Box>
  )
}

export default RecentTransactions