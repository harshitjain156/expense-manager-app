import React, { useState } from 'react';
import {
  Box,
  Button,
  CustomDropdown,
  CustomInput,
  MultiSelectDropdown,
  OutlinedButton,
  Text,
} from '../../../../components';
import {
  data,
  ExpenseCategory,
  PaymentMethods,
} from '../../../../utils/constants/chart-data';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import useSWRMutation from 'swr/mutation';
import { getExpenseData } from '../../../../services/expenseapi';
import { ADD_EXPENSE } from '../../../../utils/constants';
import { TextInput } from 'react-native-paper';
const AddExpenseModal = ({ group, hide, expense }: { group?: IGroup; hide: Function, expense?: ITransactions }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(expense?.expenseDate ? new Date(expense!.expenseDate!.split("T")[0].toString()) : new Date());
  const [selectingDate, setIsSelectingDate] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>(expense?.expenseType ?? '');
  const [expenseOwner, setExpenseOwner] = useState<string>(expense?.expenseOwner ?? '');
  const [expenseCategory, setExpenseCategory] = useState<string>(expense?.expenseCategory ?? '');
  const [expenseMembers, setExpenseMembers] = useState<string[]>(expense?.expenseMembers ?? group!.groupMembers);
  const groupEmails = group!.groupMembers.map((item: string) => {
    return { label: item, value: item };
  });

  const { trigger, isMutating } = useSWRMutation(ADD_EXPENSE, getExpenseData);


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateExpense>({

  });

  const onSubmit = async (data: any) => {
    console.log(data, "-------")
    console.log({ ...control._formValues, expenseMembers: expenseMembers, groupId: group!._id, expenseDate: selectedDate })
    await trigger({...control._formValues,expenseMembers:expenseMembers,groupId:group!._id,expenseDate:selectedDate})
    hide()
  };
  return (
    <Box
      flex={1}
      m="4"
      style={{ backgroundColor: '#ffffff90' }}
      justifyContent="center">
      <Box>
        <ScrollView>
          <Box rowGap="4" bg="white" p="4" borderRadius="rounded-3xl">
            <Text variant="textXl" fontWeight={900}>
              Add Expense
            </Text>
            <Controller
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, onBlur, value = expense?.expenseName ?? '' } }) => (
                <CustomInput
                  label={'Expense Name'}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  errors={errors.expenseName}
                />
              )}
              name="expenseName"
            />

            <Controller
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, onBlur, value = expense?.expenseDescription ?? '' } }) => (
                <CustomInput
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  label={'Expense Description'}
                  multiline
                  numberOfLines={4}
                  errors={errors.expenseDescription}
                />
              )}
              name="expenseDescription"
            />

            <CustomInput
              label={'Expense Date'}
              onPress={() => {
                setIsSelectingDate(true);
              }}
              value={format(new Date(selectedDate!), 'dd/MM/yyyy')}
            />
            <Controller
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, onBlur, value = paymentMethod } }) => (
                <CustomDropdown
                  onChangeText={onChange}
                  onBlur={onBlur}
                  label="Payment method"
                  value={value}
                  setValue={setPaymentMethod}
                  data={PaymentMethods}
                  errors={errors.expenseType}
                />
              )}
              name="expenseType"
            />
            <Controller
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, onBlur, value = expenseOwner } }) => (
                <CustomDropdown
                  onChangeText={onChange}
                  onBlur={onBlur}
                  label="Expense owner"
                  value={value}
                  setValue={setExpenseOwner}
                  data={groupEmails}
                  errors={errors.expenseOwner}
                />
              )}
              name="expenseOwner"
            />
            <Controller
              rules={{ required: true }}
              control={control}
              render={({
                field: { onChange, onBlur, value = expenseCategory },
              }) => (
                <CustomDropdown
                  onChangeText={onChange}
                  onBlur={onBlur}
                  label="Expense category"
                  value={value}
                  setValue={setExpenseCategory}
                  data={ExpenseCategory}
                  errors={errors.expenseCategory}
                />
              )}
              name="expenseCategory"
            />
            <Controller
              control={control}
              rules={{ required: true,

                validate: (value) => { 
                  console.log(value.toString()); 
                  return parseFloat(value.toString()) > 0 
                } 
              }} // Add validation rules for expenseAmount              control={control}
              render={({ field: { onChange, onBlur, value=0} }) => (
                <CustomInput
                  label={'Expense Amount'}
                  keyboardType={'number-pad'}
                  onBlur={onBlur}
                  value={value.toString()}
                  left={<TextInput.Affix text={`\u20A8`} />}
                  onChangeText={(text) => {
                    const parsedValue = parseFloat(text);
                    console.log(parsedValue)
                    if (!isNaN(parsedValue) && parseFloat(text)>0) {
                      onChange(parsedValue);
                    } else {
                      onChange(text);
                    }
                  }}

                  errors={errors?.expenseAmount}
                />
              )}
              name="expenseAmount"
            />
            <MultiSelectDropdown
              label="Select expense members "
              data={groupEmails}
              setSelected={setExpenseMembers}
              selected={expenseMembers}
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
                <Button label="Submit" onPress={handleSubmit(onSubmit)} />
              </Box>
            </Box>
          </Box>
        </ScrollView>
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

export default AddExpenseModal;
