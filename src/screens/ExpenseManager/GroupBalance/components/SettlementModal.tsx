import { Dimensions } from 'react-native';
import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  CustomInput,
  Input,
  OutlinedButton,
  Text,
} from '../../../../components';
import { format } from 'date-fns';
import { MAKE_SETTLE } from '../../../../utils/constants';
import { getExpenseData } from '../../../../services/expenseapi';
import useSWRMutation from 'swr/mutation';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import GroupContext from '../../../../store/groupContext';
const SettlementModal = ({
  data,
  hide,
  groupId,
}: {
  data: string[];
  hide: Function;
  groupId: string;
}) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IMaleSettlement>({});
  const { trigger: makeSettlement, isMutating } = useSWRMutation(
    MAKE_SETTLE,
    getExpenseData,
  );
  const {setContext}=useContext(GroupContext)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectingDate, setIsSelectingDate] = useState<boolean>(false);
  return (
    <Box
      style={{ backgroundColor: '#ffffff90' }}
      flex={1}
      justifyContent="center"
      alignItems="center">
      <Box
        width={Dimensions.get('window').width * 0.8}
        rowGap="2"
        padding="6"
        borderRadius="rounded-3xl"
        bg="white">
        <Text variant="textXl" paddingHorizontal="1" mb="6" fontWeight={900}>
          Settle Balance
        </Text>
        <Controller
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value = data[0] } }) => (
            <CustomInput
              editable={false}
              label={'Settlement from'}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              errors={errors.settleFrom}
            />
          )}
          name="settleFrom"
        />
        <Controller
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value = data[1] } }) => (
            <CustomInput
              editable={false}
              label={'Settlement to'}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              errors={errors.settleTo}
            />
          )}

          name="settleTo"
        />
        <CustomInput
          label={'Settlement Date'}
          onPress={() => {
            setIsSelectingDate(true);
          }}
          value={format(new Date(selectedDate!), 'dd/MM/yyyy')}
        />
        <Controller
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value = parseFloat(data[2]).toString() } }) => (
            <CustomInput
              label={'Expense Amount'}
              keyboardType={'number-pad'}
              left={<TextInput.Affix text={`\u20A8`} />}
              onBlur={onBlur}
              value={value}
              onChangeText={text => onChange(parseFloat(text))}
              errors={errors.settleAmount}
            />
          )}
          name="settleAmount"
        />
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
            <Button
              label="Submit"
              onPress={async () => {
                const settle = {
                  groupId: groupId,
                  settleAmount: getValues('settleAmount') ?? data[2],
                  settleDate: selectedDate,
                  settleFrom: data[0],
                  settleTo: data[1],
                };
                console.log(settle)
                await makeSettlement(settle)
                  .then((res) => {
                    console.log(res)
                    setContext(prev=>!prev)
                    hide();
                  })
                  .catch(err => console.log(err));
              }}
            />
          </Box>
        </Box>
      </Box>
      {selectingDate && (
        <DateTimePicker
          themeVariant="light"
          value={new Date()}
          mode="date"
          onChange={(event, date) => {
            setSelectedDate(date!);
            setIsSelectingDate(false);
          }}
          onTouchCancel={() => {
            setIsSelectingDate(false);
          }}
        />
      )}
    </Box>
  );
};

export default SettlementModal;
