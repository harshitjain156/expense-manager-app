import React from 'react'
import { Box, Text } from '../../../../utils/theme';
import { TouchableOpacity } from 'react-native';

const MoveToSignup = ( {onPress}:{onPress:Function}) => {
  return (
    <Box flexDirection="row" m="4" justifyContent="center">
        <Text variant="textBase">Don’t have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            onPress()
          }}>
          <Text variant="textBase" fontWeight={900} color="primary">
          Get started
          </Text>
        </TouchableOpacity>
      </Box>
  )
}

export default MoveToSignup