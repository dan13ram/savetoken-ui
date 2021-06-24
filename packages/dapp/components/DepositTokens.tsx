import { StackProps, Text, VStack } from '@chakra-ui/react';
import { Input } from 'components/common/Input';
import { DepositEstimate } from 'components/DepositEstimate';
import { useSave } from 'contexts/SaveContext';
import { useWeb3 } from 'contexts/Web3Context';
import React, { ChangeEvent, useState } from 'react';

export const DepositTokens: React.FC<StackProps> = props => {
  const { isConnected } = useWeb3();
  const { symbol, saveToken } = useSave();
  const isDisabled = !saveToken;
  const [value, setValue] = useState('');
  return (
    <VStack spacing="1.25rem" pt="1.5rem" w="100%" {...props}>
      <Text
        textAlign="center"
        fontWeight="bold"
        color={isDisabled ? 'grey4' : 'black'}
        pointerEvents={isDisabled ? 'none' : 'initial'}
      >
        {`How much `}
        <Text as="span" fontFamily="grotesk">
          {symbol}
        </Text>
        {` would you like to save?`}
      </Text>
      <Input
        placeholder={`${symbol} Deposit Amount`}
        buttonText={isConnected ? 'Deposit' : 'Simulate'}
        isDisabled={!saveToken}
        buttonColor={isConnected ? saveToken?.color : 'greyGradient'}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        fontWeight="bold"
        type="number"
        onMax={() => setValue('100')}
      />
      {!isDisabled && <DepositEstimate value={value} />}
    </VStack>
  );
};
