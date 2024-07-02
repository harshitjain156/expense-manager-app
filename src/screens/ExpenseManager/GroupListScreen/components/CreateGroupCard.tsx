import React from 'react';
import {TouchableOpacity} from 'react-native';
import { Box, Card, Text } from '../../../../components';

const CreateGroupCard = ({onPress}: {onPress: Function}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <Card variant='elevated'
        backgroundColor="blu300"
        flex={1}
        height={250}
      
        justifyContent="center"
        alignItems="center">
        <Text variant="text3Xl" color="white" fontWeight={900}>
          Create new group!
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CreateGroupCard;
