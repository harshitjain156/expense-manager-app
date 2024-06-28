import React from 'react'
import SafeAreaWrapper from './SafeAreaWrapper'
import { Box } from '../../utils/theme'
import { ActivityIndicator } from 'react-native'


const Loader = () => {
  return (
    <SafeAreaWrapper>
        <Box flex={1} justifyContent='center' alignItems='center'>
            <ActivityIndicator size={40} />
        </Box>
    </SafeAreaWrapper>
  )
}

export default Loader