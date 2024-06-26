import React from 'react';
import {Box, Text} from '../../../../utils/theme';
import {Image} from 'react-native';

const GroupCard = () => {
  const data = [',', ',', ',', ',', ',', ',', ',', ',', ',', ','];

  return (
    <Box bg="white" borderRadius="rounded-3xl" overflow="hidden">
      <Box p="2" bg="sky100">
        <Text variant="text2Xl" color="blu600" fontWeight={900} pt="6">
          Group Name
        </Text>
        <Text variant="textBase" color="gray500" fontWeight={700}>
          desc
        </Text>
      </Box>
      <Box p="4">
        <Box flexDirection="row" justifyContent="space-between" pt="4">
          <Text variant="textBase" color="red800" fontWeight={900}>
            Not Settle
          </Text>
          <Text variant="textBase" color="red800" fontWeight={900}>
            You owe: Rs.500
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" pt="4">
          <Text variant="textXl" color="gray500" fontWeight={700}>
            Category
          </Text>
          <Box width={16} />
          <Text variant="textXl" color="amber400" fontWeight={700}>
            Sports
          </Text>
        </Box>
        <Box flexDirection="row" mt="4" justifyContent="flex-end">
          {data.map((item, index) => {
            if (index < 2) {
              return (
                <Box
                  height={60}
                  width={60}
                  bg="gray200"
                  borderWidth={2}
                  borderColor="white"
                  borderRadius="rounded-9xl">
                  <Image
                    source={require('../../../../assets/mock-images/avatar.png')}
                    style={{height: 60, width: 60}}
                  />
                </Box>
              );
            }
          })}
          {data.length > 2 ? (
            <Box
              height={60}
              width={60}
              bg="gray300"
              borderWidth={2}
              alignItems="center"
              justifyContent="center"
              borderColor="white"
              borderRadius="rounded-9xl">
              <Text variant="text2Xl" fontWeight={900} color="white">
                +{data.length - 2}
              </Text>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default GroupCard;
