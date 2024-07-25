import {Image} from 'react-native';
import React from 'react';
import {Box, Text} from '../';

const DrawerCard = ({user}: {user: IUser}) => {
  return (
    <Box bg="blu200" flexDirection="row" p="4" borderRadius="rounded-3xl">
      <Box height={60} width={60} bg="green200" borderRadius="rounded-9xl">
        <Image
          source={require('../../assets/mock-images/avatar.png')}
          style={{
            resizeMode: 'contain',
            height: 60,
            width: 60,
          }}
        />
      </Box>
      <Box width={14} />
      <Box justifyContent="center">
        <Text variant="textBase" fontWeight={900}>
          {user?.firstName} {user?.lastName}
        </Text>
        <Text variant="textXs" color="grey">
          {user?.email}
        </Text>
      </Box>
    </Box>
  );
};

export default DrawerCard;
