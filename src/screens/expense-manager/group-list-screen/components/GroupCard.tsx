import React from 'react';
import {Box, Text} from '../../../../utils/theme';
import {Image} from 'react-native';
import useUserGlobalStore from '../../../../store/useUserGlobalStore';
import {checkActive, convertToCurrency} from '../../../../utils/helpers';
const GroupCard = ({group}: {group: IGroup}) => {
  const data = group.groupMembers;
  const {user} = useUserGlobalStore();

  return (
    <Box mb="4" bg="white" borderRadius="rounded-3xl" overflow="hidden">
      <Box p="4" pb="6" bg="sky100">
        <Text variant="text2Xl" color="blu600" fontWeight={900} pt="6">
          {group.groupName}
        </Text>
        <Text variant="textBase" color="gray500" fontWeight={700}>
          {group.groupDescription}
        </Text>
      </Box>
      <Box
        ml="4"
        height={60}
        width={60}
        borderRadius="rounded-9xl"
        bg="white"
        mt="-2"
      />
      <Box p="4">
        <Box flexDirection="row" justifyContent="space-between" pt="4">
          <Text
            variant="textBase"
            color={checkActive(group.split[0]) ? 'red800' : 'green600'}
            fontWeight={900}>
            {checkActive(group.split[0]) ? 'Not Settled' : 'Settled'}
          </Text>
          <Text
            variant="textBase"
            color={group.split[0][user?.email!] < 0 ? 'red800' : 'green500'}
            fontWeight={900}>
            {group.split[0][user?.email!] < 0 ? 'You owe' : 'You are owed'} Rs.
            {convertToCurrency(group.split[0][user?.email!])}
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" pt="4">
          <Text variant="textXl" color="gray500" fontWeight={700}>
            Category
          </Text>
          <Box width={16} />
          <Text variant="textXl" color="amber400" fontWeight={700}>
            {group.groupCategory}
          </Text>
        </Box>
        <Box gap={'-2'} flexDirection="row" mt="4" justifyContent="flex-end">
          {data.map((item, index) => {
            if (index < 2) {
              return (
                <Box
                  justifyContent="center"
                  alignItems="center"
                  marginRight={index == 1 ? '0' : '-2'}
                  height={60}
                  width={60}
                  bg="white"
                  borderColor="white"
                  borderRadius="rounded-9xl">
                  <Image
                    source={require('../../../../assets/mock-images/avatar.png')}
                    style={{height: 55, width: 55}}
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
              marginLeft="-2"
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
