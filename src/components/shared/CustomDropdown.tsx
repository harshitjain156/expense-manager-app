import {View, StyleSheet, TextInputProps} from 'react-native';
import React, {Dispatch, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import theme from '../../utils/theme';
import {DropdownData} from '../../utils/constants/chart-data';
import {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
import {FieldError} from 'react-hook-form';
import {Text} from '../theme';
type InputProps = {
  data: {label: string; value: string}[];
  value: string;
  label?: string;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
  errors?: FieldError;
  setValue: (value: string) => void;
};
const CustomDropdown = ({
  data,
  value,
  onChangeText,
  errors,
  onBlur,
  setValue,
  label,
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        accessibilityLabel="Select yyy"
        itemAccessibilityLabelField="jhdbhdbg"
        itemTextStyle={{color: 'black'}}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        maxHeight={300}
        search
        mode="modal"
        data={data}
        labelField="label"
        valueField="value"
        placeholder={label ?? 'Select item'}
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={onBlur}
        value={value}
        onChange={item => {
          setValue(item.value);
          onChangeText(item.value);
          setIsFocus(false);
        }}
      />
      {errors && value == '' && (
        <Text mt="3.5" color="rose500">
          {label} is required
        </Text>
      )}
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {padding: 16},
  dropdown: {
    textShadowColor: 'black',
    height: 50,
    backgroundColor: 'transparent',

    color: 'black',
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    borderRadius: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: 'red',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
    color: 'black',
  },
});
// import { View, StyleSheet } from 'react-native';
// import React, { useState } from 'react';
// import { Dropdown } from 'react-native-element-dropdown';
// import { Text } from '../theme';
// import theme from '../../utils/theme';
// import { FieldError } from 'react-hook-form';

// type InputProps = {
//   data: { label: string; value: string }[];
//   value: string;
//   label?: string;
//   onChangeText: (value: string) => void;
//   onBlur?: () => void;
//   errors?: FieldError;
//   setValue: (value: string) => void;
// };

// const CustomDropdown = ({
//   data,
//   value,
//   onChangeText,
//   onBlur,
//   errors,
//   setValue,
//   label,
// }: InputProps) => {
//   const [isFocus, setIsFocus] = useState(false);

//   return (
//     <View>
//       <Dropdown
//         style={styles.dropdown}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         inputSearchStyle={styles.inputSearchStyle}
//         iconStyle={styles.iconStyle}
//         maxHeight={300}
//         search
//         mode="modal"
//         data={data}
//         labelField="label"
//         valueField="value"
//         placeholder={label ?? 'Select item'}
//         searchPlaceholder="Search..."
//         onFocus={() => setIsFocus(true)}
//         onBlur={onBlur}
//         value={value}
//         onChange={item => {
//           setValue(item.value);
//           onChangeText(item.value);
//           setIsFocus(false);
//         }}
//       />
//       {errors && (
//         <Text mt="3.5" color="rose500">
//           {label} is required
//         </Text>
//       )}
//     </View>
//   );
// };

// export default CustomDropdown;

// const styles = StyleSheet.create({
//   container: {padding: 16},
//   dropdown: {
//     textShadowColor: 'black',
//     height: 50,
//     backgroundColor: 'transparent',

//     color: 'black',
//     padding: 16,
//     borderWidth: 1,
//     borderColor: theme.colors.grey,
//     borderRadius: 5,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//     color: 'black',
//   },
//   selectedTextStyle: {
//     fontSize: 14,
//     color: 'black',
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//     color: 'red',
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//     color: 'black',
//   },
//   icon: {
//     marginRight: 5,
//   },
//   selectedStyle: {
//     borderRadius: 12,
//     color: 'black',
//   },
// });
