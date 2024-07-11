import React, {useState} from 'react';
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
import {format} from 'date-fns';
import {Controller, useForm} from 'react-hook-form';
import { ScrollView} from 'react-native';
const AddExpenseModal = ({group, hide}: {group: IGroup; hide: Function}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectingDate, setIsSelectingDate] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [expenseOwner, setExpenseOwner] = useState<string>('');
  const [expenseCategory, setExpenseCategory] = useState<string>('');
  const [expenseMembers, setExpenseMembers] = useState<string[]>(
    group.groupMembers,
  );
  const groupEmails = group.groupMembers.map((item: string) => {
    return {label: item, value: item};
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ICreateExpense>({});
  const onSubmit = (data: any) => {
    console.log(control._formValues);
  };
  return (
    <Box
      flex={1}
      m="4"
      style={{backgroundColor: '#ffffff90'}}
      justifyContent="center">
      <Box>
        <ScrollView>
          <Box rowGap="4" bg="white" p="4" borderRadius="rounded-3xl">
            <Text variant="textXl" fontWeight={900}>
              Add Expense
            </Text>
            <Controller
              rules={{required: true}}
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
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
              rules={{required: true}}
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
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
              rules={{required: true}}
              control={control}
              render={({field: {onChange, onBlur, value = paymentMethod}}) => (
                <CustomDropdown
                  onChangeText={onChange}
                  onBlur={onBlur}
                  label="Payment method"
                  value={value}
                  setValue={setPaymentMethod}
                  data={PaymentMethods}
                  errors={errors.paymentMethod}
                />
              )}
              name="paymentMethod"
            />
            <Controller
              rules={{required: true}}
              control={control}
              render={({field: {onChange, onBlur, value = expenseOwner}}) => (
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
              rules={{required: true}}
              control={control}
              render={({
                field: {onChange, onBlur, value = expenseCategory},
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
              rules={{required: true}}
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label={'Expense Amount'}
                  keyboardType={'number-pad'}
                  inlineImageLeft={`\u20A8`}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  errors={errors.expenseAmount}
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
