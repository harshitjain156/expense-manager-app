import {View, Dimensions} from 'react-native';
import React from 'react';
import {LineChart, PieChart} from 'react-native-chart-kit';
import { Box, Card, Text } from '../theme';

const CustomLineChart = ({data}: {data: any}) => {
  if (!(data.labels.length > 0)) {
    return null;
  }
  return (
    <Card
      variant='elevated'
      p="6"
      bg="white"
      >
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
    </Card>
  );
};

export default CustomLineChart;
