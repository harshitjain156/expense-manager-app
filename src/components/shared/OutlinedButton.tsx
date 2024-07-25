import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Box, Text} from '../theme';

type ButtonProps = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  uppercase?: boolean;
} & TouchableOpacityProps;

const OutlinedButton = ({
  label,
  onLongPress,
  onPress,
  disabled,
  uppercase,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}>
      <Box
        bg="transparent"
        py="4"
        px="4"
        borderWidth={1}
        borderColor={disabled ? 'gray800' : 'primary'}
        borderRadius="rounded-2xl">
        <Text
          variant="textSm"
          fontWeight="700"
          color={disabled ? 'gray800' : 'primary'}
          textAlign="center"
          textTransform={uppercase ? 'uppercase' : 'none'}>
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default OutlinedButton;
