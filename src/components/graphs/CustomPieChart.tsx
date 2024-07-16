import React from 'react';
import {Box, Text} from '../theme';
import {PieChart, pieDataItem} from 'react-native-gifted-charts';
import {Dimensions} from 'react-native';

const CustomPieChart = ({
  categories,
  label,
}: {
  categories: pieDataItem[];
  label: string;
}) => {
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
        {label}
      </Text>
      <PieChart
        donut
        showValuesAsLabels
        labelsPosition={'mid'}
        textColor="black"
        radius={150}
        textSize={14}
        textBackgroundRadius={1}
        data={categories}
      />
      <Box
        mt="4"
        flexDirection="row"
        gap={'4'}
        columnGap="4"
        flexWrap="wrap"
        justifyContent="space-between">
        {categories.map((item, index) => {
          return (
            <Box
              key={index}
              flexDirection="row"
              width={Dimensions.get('window').width * 0.35}>
              <Box
                height={20}
                width={40}
                style={{backgroundColor: item.color}}
              />
              <Text> {item.text}</Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CustomPieChart;
