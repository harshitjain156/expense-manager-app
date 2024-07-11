import {View, StyleSheet} from 'react-native';
import React, {SetStateAction, useState} from 'react';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import theme from '../../utils/theme';
import {Box, Text} from '../theme';

type DropdownProps = {
  data: {label: string; value: string}[];
  selected: string[];
  setSelected: any;
  label?:string
};
const MultiSelectDropdown = ({data, selected, setSelected,label}: DropdownProps) => {
  const [error, setError] = useState('');
  return (
    <Box>
      <MultiSelect
        style={styles.dropdown}
        itemTextStyle={{color: 'black'}}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        searchField="label"
        search
        data={data}
        labelField="label"
        valueField="value"
        
        placeholder={label ?? "Select item"}
        searchPlaceholder="Search..."
        value={selected}
        onChange={item => {
          if (item.length == 0) {
            setError('Please select at least one item.');
          } else {
            setError('');
            setSelected(item);
          }
        }}
        selectedStyle={styles.selectedStyle}
      />
      {error && (
        <Text mt="3.5" color="rose500">
          {error} is required
        </Text>
      )}
    </Box>
  );
};

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
export default MultiSelectDropdown;
