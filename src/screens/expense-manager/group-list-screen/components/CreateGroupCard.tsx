import React from 'react';
import {Box, Text} from '../../../../utils/theme';
import {TouchableOpacity} from 'react-native';

const CreateGroupCard = ({onPress}: {onPress: Function}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <Box
        backgroundColor="blu300"
        flex={1}
        height={250}
        borderRadius="rounded-3xl"
        justifyContent="center"
        alignItems="center">
        <Text variant="text3Xl" color="white" fontWeight={900}>
          Create new group!
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default CreateGroupCard;
