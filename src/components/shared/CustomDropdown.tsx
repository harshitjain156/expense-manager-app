import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import theme from '../../utils/theme';
import { DropdownData } from '../../utils/constants/chart-data';

const CustomDropdown = () => {
  
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        itemTextStyle={{color: 'black'}}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        maxHeight={300}
        search
        data={DropdownData}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={value}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}

        // selectedStyle={styles.selectedStyle}
      />
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
    borderRadius: theme.borderRadii['rounded-3xl'],
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
