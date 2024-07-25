import React from 'react';
import SafeAreaWrapper from './SafeAreaWrapper';
import {ActivityIndicator} from 'react-native';
import {Box} from '../theme';

const Loader = () => {
  return (
    <SafeAreaWrapper>
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size={40} />
      </Box>
    </SafeAreaWrapper>
  );
};

export default Loader;
