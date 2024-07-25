import React from 'react';
import {Box, Text} from '../../../utils/theme';
import Button from '../../../components/shared/Button';
import {Image} from 'react-native';

const Welcome = ({onPress}: {onPress: Function}) => {
  return (
    <Box
      m="4"
      elevation={2}
      paddingHorizontal="6"
      pt="6"
      backgroundColor="sky200"
      borderRadius="rounded-3xl">
      <Text variant="textXl" fontWeight={900} color="blu900">
        Hello there, Welcome back!
      </Text>
      <Box height={16} />
      <Text variant="textBase">
        Keep track of shared expenses and settle your corresponding balances in
        a convenient and personalized way.
      </Text>
      <Box height={16} />
      <Box width={'40%'}>
        <Button
          label="View Groups"
          onPress={() => {
            onPress();
          }}></Button>
      </Box>
      <Box>
        <Image
          style={{resizeMode: 'stretch', width: '100%', height: 200}}
          source={require('../../../assets/illustrations/dashboard-card.png')}
        />
      </Box>
    </Box>
  );
};

export default Welcome;
