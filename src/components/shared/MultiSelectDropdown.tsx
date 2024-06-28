import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import theme, { Box } from '../../utils/theme';

const MultiSelectDropdown = () => {
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];
      const [selected, setSelected] = useState<string[]>([]);    
      const [isFocus, setIsFocus] = useState(false);
      const [value, setValue] = useState('');

  return (
   <Box >
    <MultiSelect
          style={styles.dropdown}
          itemTextStyle={{color:'black'}}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          searchField='label'
        
          search
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={selected}
          onChange={(item) => {
            setSelected(item!);
          }}
          
          selectedStyle={styles.selectedStyle}
        /> 
        
   </Box>
  )
}

const styles = StyleSheet.create({
    container: { padding: 16 },
    dropdown: {
      textShadowColor:'black',
      height: 50,
      backgroundColor: 'transparent',

          color:'black',
          padding: 16,
          borderWidth: 1,
          borderColor: theme.colors.grey,
          borderRadius: theme.borderRadii["rounded-3xl"],

    },
    placeholderStyle: {
      fontSize: 16,
      color:'black'
    },
    selectedTextStyle: {
      fontSize: 14,
      color:'black',
    

    },
    iconStyle: {
      width: 20,
      height: 20,
      color:'red'
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color:'black'

    },
    icon: {
      marginRight: 5,
    },
    selectedStyle: {
      borderRadius: 12,
      color:'black'

    },
  });
export default MultiSelectDropdown 