import React from 'react';
import Button from '../../../../components/shared/Button';
import {Image} from 'react-native';
import {Box, Text, Card} from '../../../../components';

const Welcome = ({onPress}: {onPress: Function}) => {
  return (
    <Card
      variant="elevated"
      paddingHorizontal="6"
      pt="6"
      backgroundColor="sky200">
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
          source={require('../../../../assets/illustrations/dashboard-card.png')}
        />
      </Box>
    </Card>
  );
};

export default Welcome;
