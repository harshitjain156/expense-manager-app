import React from 'react';
import {Image} from 'react-native';
import {Box, Card, OutlinedButton, Text} from '../../../../components';

const ViewGroup = ({onPress}: {onPress: Function}) => {
  return (
    <Card
      variant="elevated"
      p="6"
      backgroundColor="green200"
      justifyContent="center"
      alignItems="center">
      <Image
        style={{resizeMode: 'stretch', width: '100%', height: 200}}
        source={require('../../../../assets/illustrations/dashboard-card.png')}
      />

      <Box height={16} />
      <Text
        variant="textBase"
        textAlign="left"
        color="green700"
        fontWeight={700}>
        Keep track of shared expenses and settle your corresponding balances in
        a convenient and personalized way.
      </Text>
      <Box height={16} />
      <Box width={'40%'}>
        <OutlinedButton
          label="View Groups"
          onPress={() => {
            onPress();
          }}></OutlinedButton>
      </Box>
    </Card>
  );
};

export default ViewGroup;
