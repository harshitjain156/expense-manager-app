import {View, Dimensions} from 'react-native';
import React from 'react';
import {Box, Text} from '../../utils/theme';
import {LineChart, PieChart} from 'react-native-chart-kit';

const CustomLineChart = ({data}: {data: any}) => {
  if (!(data.labels.length > 0)) {
    return null;
  }
  return (
    <Box
      elevation={2}
      m="4"
      p="6"
      bg="white"
      borderRadius="rounded-3xl"
      shadowRadius={4}
      shadowColor="gray5">
      <Text mb="4" variant="textXl" fontWeight={700} textAlign="left">
        Expense Graph
      </Text>

      <LineChart
        data={data}
        width={Dimensions.get('window').width * 0.8} // from react-native
        height={220}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'transparent',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffffff',
          },
        }}
        bezier
      />
    </Box>
  );
};

export default CustomLineChart;
