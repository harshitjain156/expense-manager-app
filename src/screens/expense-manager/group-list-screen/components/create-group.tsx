import React from 'react';
import {Box, Text} from '../../../../utils/theme';

const CreateGroupCard = () => {
  return (
    <Box
      backgroundColor="blu300"
      flex={1}
      height={300}
      borderRadius="rounded-3xl"
      justifyContent="center"
      alignItems="center">
      <Text variant="text3Xl" color="white" fontWeight={900}>
        Create new group!
      </Text>
    </Box>
  );
};

export default CreateGroupCard;
