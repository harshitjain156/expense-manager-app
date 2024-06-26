import React from 'react'
import { Box, Text } from '../../utils/theme'
import { PieChart } from 'react-native-chart-kit'
import { data } from '../../utils/constants/chart-data'

const CustomPieChart = () => {
  return (
    <Box elevation={2} m='4' p='6' bg='white' borderRadius='rounded-3xl' shadowRadius={4} shadowColor='gray5'>
    <Text mb='4' variant='textXl' fontWeight={700} textAlign='left'>Groupwise Expense Chart</Text>
    <PieChart
      data={data}
      width={300}
      height={300}
      chartConfig={{
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,

      }}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"5"}
      center={[50, 0]}
      style={{

      }}
      
    />


  </Box>
  )
}

export default CustomPieChart