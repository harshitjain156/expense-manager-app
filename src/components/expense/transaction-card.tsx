import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { Box, Text } from '../../utils/theme'

const TransactionCard = () => {
  return (
    <Box mt='2' shadowColor={'gray700'} bg='white' justifyContent='space-between' elevation={2} borderRadius='rounded-3xl' flexDirection='row'  p='2' shadowRadius={5} shadowOpacity={.8}
    shadowOffset={{width:0,height:10 }}
    >
       <Box flexDirection='row'>
       <Box borderRadius='rounded-9xl' height={80} width={80} bg='red50' justifyContent='center' alignItems='center'>
        <Text variant='textXl' lineHeight={20} fontWeight={900}>24</Text>
        <Text variant='textXl' lineHeight={20}>June</Text>
       </Box>
       <Box width={16} />
       <Box>
        <Text variant='textBase' color='blu500' fontWeight={900}>
          My Expense
        </Text>
        <Text variant='textBase' color='blu500' fontWeight={700}>
          Total: Rs. 300
        </Text>
        <Text variant='textXs'  >
          Paid by
        </Text>
        <Text variant='textXs' >
          hjain@gmail.com
        </Text>
       </Box>
       </Box>
       <Box alignItems='center' justifyContent='center'>
        <Text variant='textBase' color='red800' fontWeight={900}>
          Per Person
        </Text>
        <Text variant='textBase' color='red800' fontWeight={700}>
         Rs. 300
        </Text>
       
       </Box>
        
    </Box>
  )
}

export default TransactionCard

const styles = StyleSheet.create({})