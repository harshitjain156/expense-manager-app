import {Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Box, Button, Input, OutlinedButton, Text} from '../../../../components';
import {DataTable} from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import {format} from 'date-fns';
import { MAKE_SETTLE } from '../../../../utils/constants';
import { getExpenseData } from '../../../../services/expenseapi';
import useSWRMutation from 'swr/mutation';
import DateTimePicker from '@react-native-community/datetimepicker';
const SettlementModal = ({data, hide,groupId}: {data: string[]; hide: Function,groupId:string}) => {
  const [isSelectingDate, setIsSelectingDate] = useState<boolean>(true);
  const {trigger:makeSettlement, isMutating} = useSWRMutation(MAKE_SETTLE, getExpenseData);

  return (
    <Box
      style={{backgroundColor: '#ffffff90'}}
      flex={1}
      justifyContent="center"
      alignItems="center">
      <Box
        width={Dimensions.get('window').width * 0.8}
        padding="6"
        borderRadius="rounded-3xl"
        bg="white">
        <Text variant="textXl" paddingHorizontal="1" mb="6" fontWeight={900}>
          Settle Balance
        </Text>
        <Text variant="textBase" paddingHorizontal="1" color="gray4">
          Settlement from
        </Text>
        <Input label="Settlement to" value={data[0]} />
        <Text variant="textBase" paddingHorizontal="1" color="gray4">
          Settlement to
        </Text>
        <Input label="Settlement From" value={data[1]} />
        <Text variant="textBase" paddingHorizontal="1" color="gray4">
          Settlement date
        </Text>
        <Input label="Settlement to" />
        <Text variant="textBase" paddingHorizontal="1" color="gray4">
          Amount (in Rs)
        </Text>
        <Input label="Amount" value={data[2].toString()} />
        <Box
          gap={'5'}
          flexDirection="row"
          justifyContent="space-between"
          mt="4">
          <Box flex={1}>
            <OutlinedButton
              label="Cancel"
              onPress={() => {
                hide();
              }}
            />
          </Box>
          <Box flex={1}>
            <Button label="Submit" onPress={async() => {
                const settle={
                    groupId:groupId,
                    settleAmount:data[2],
                    settleDate:Date.now(),
                    settleFrom:data[0],
                    settleTo:data[1]
                }
                 await makeSettlement(settle).then(()=>{hide()}).catch(err=>console.log(err))
            }} />
          </Box>
        </Box>
      </Box>
      <DateTimePicker themeVariant='light' value={new Date()} mode='date' onChange={(event,selectedDate)=>{
          console.log(selectedDate)
        }}/>
    </Box>
  );
};

export default SettlementModal;
