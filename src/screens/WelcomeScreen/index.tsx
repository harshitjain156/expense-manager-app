import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/shared/Button';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenNavigationType} from '../../navigation/type';
import { Box } from '../../components';

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<'Welcome'>>();
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <View>
        <Button
          label="Get Started"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </Box>
  );
};

export default WelcomeScreen;
