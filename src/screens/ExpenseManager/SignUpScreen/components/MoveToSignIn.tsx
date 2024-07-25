import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Box, Text } from '../../../../components';

export default function MoveToSignIn( {onPress}:{onPress:Function}) {
  return (
    <Box flexDirection="row" m="4" justifyContent="center">
        <Text variant="textBase">Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            onPress()
          }}>
          <Text variant="textBase" fontWeight={900} color="primary">
            Login
          </Text>
        </TouchableOpacity>
      </Box>
  )
}