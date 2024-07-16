import React from 'react';
import {Box, Card, Text} from '../../../../components';
import useUserGlobalStore from '../../../../store/useUserGlobalStore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';

const SettlementCard = ({settlement,Settle}:{settlement:string[],Settle:Function}) => {
  const {user}=useUserGlobalStore()
  if(settlement.length==0){
    return null
  }
  return (
    <Card
      variant="elevated"
      bg="red200"
      p="4"
      flexDirection="row"
      justifyContent="space-between">
      <Box height={60} borderRadius="rounded-9xl" width={60} bg="white" >
      <Image
            source={require('../../../../assets/mock-images/avatar.png')}
            style={{
              resizeMode: 'contain',
              height: 60,
              width: 60,
            }}
          />
      </Box>

      <Box flexDirection="column" justifyContent="center">
        <Box flexDirection="row">
          <Text variant="textBase" fontWeight={700}>
            {settlement[0].split("@")[0]}
          </Text>
          <Text variant="textBase"> to</Text>
        </Box>
        <Text variant="textBase" fontWeight={700}>
            {settlement[1].split("@")[0]}
        </Text>
      </Box>
      <Box alignItems="center" flexDirection="column" justifyContent="center">
        <Text variant="textXs" color="red700">
          Settlement Amount
        </Text>
        <Text variant="textBase" color="red700" fontWeight={700}>
          Rs {settlement[2]}
        </Text>
        {user?.email==settlement[0]?<TouchableOpacity onPress={()=>{Settle()}}>
          <Box justifyContent="center">
        <Text variant="textBase" color="blu700" fontWeight={900}>
          Settle
        </Text>
      </Box>
        </TouchableOpacity>:null}
      </Box>
      
    </Card>
  );
};

export default SettlementCard;
