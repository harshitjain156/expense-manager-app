import {Modal} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Box, Text, SafeAreaWrapper, Loader} from '../../../components';
import SettlementCard from './components/SettlementCard';
import useSWRMutation from 'swr/mutation';
import {GET_SETTLEMENTS} from '../../../utils/constants';
import {getExpenseData} from '../../../services/expenseapi';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import SettlementModal from './components/SettlementModal';
import GroupContext from '../../../store/groupContext';

const GroupBalance = () => {
  const [settlement, setSettlement] = useState<string[][]>();
  const [settle, setSettle] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const {context, setContext} = useContext(GroupContext);
  const group: IGroup = route.params as IGroup;
  const {trigger: getSettlemets, isMutating} = useSWRMutation(
    GET_SETTLEMENTS,
    getExpenseData,
  );
  const getSettlementData = async () => {
    await getSettlemets({id: group._id})
      .then(res => {
        const settleArray: string[][] = [];
        res.data.map((item: string[]) => {
          if (item[2].toString() != '0') {
            settleArray.push(item);
          }
        });
        console.log(res.data, settle);
        setSettlement(settleArray);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
      });
  };
  useFocusEffect(
    useCallback(() => {
      getSettlementData();
    }, [isModalVisible]),
  );
  if (isLoading) {
    return <Loader />;
  }
  return (
    <SafeAreaWrapper>
      <Modal visible={isModalVisible} transparent>
        <SettlementModal
          groupId={group._id}
          data={settle}
          hide={() => {
            setIsModalVisible(false);
          }}
        />
      </Modal>
      {settlement && settlement.length > 0 ? (
        <Box p="4">
          {settlement.map((item: string[], index: number) => {
            if (item[2].toString() != '0') {
              return (
                <SettlementCard
                  key={index}
                  Settle={() => {
                    setIsModalVisible(true);
                    setSettle(item);
                  }}
                  settlement={item}
                />
              );
            }
          })}
        </Box>
      ) : (
        <Box flex={1} minHeight={300} justifyContent="center">
          <Text textAlign="center">No settlements left</Text>
        </Box>
      )}
    </SafeAreaWrapper>
  );
};

export default GroupBalance;
