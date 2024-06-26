import React from 'react'
import { Box, Text } from '../../../utils/theme'

const TotalAmount = () => {
  return (
    <Box elevation={2} m='4' p='6' backgroundColor='sky200' borderRadius='rounded-3xl' >
    <Box flexDirection='row' >
      <Box borderRadius='rounded-9xl' height={60} width={60} bg='blu700'>

      </Box>
      <Box width={16} />
      <Box flexDirection='column'>
        <Text variant='textXl' color='blu700'>
          Total
        </Text>
        <Text variant='text2Xl' fontWeight={700} color='blu700'>
          Rs. 1775
        </Text>
      </Box>
    </Box>
  </Box>
  )
}

export default TotalAmount