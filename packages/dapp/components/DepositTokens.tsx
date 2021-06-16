import { StackProps, Text, VStack } from '@chakra-ui/react';
import { Input } from 'components/common/Input';
import { useSave } from 'contexts/SaveContext';
import { useWeb3 } from 'contexts/Web3Context';
import React, { ChangeEvent, useState } from 'react';

export const DepositTokens: React.FC<StackProps> = props => {
  const { isConnected } = useWeb3();
  const { symbol, saveToken } = useSave();
  const isDisabled = !saveToken;
  const [value, setValue] = useState('');
  return (
    <VStack spacing="1rem" pt="1rem" w="100%" {...props}>
      <Text
        textAlign="center"
        fontWeight="bold"
        opacity={isDisabled ? '0.25' : 1}
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
        onMax={() => setValue('100')}
      />
    </VStack>
  );
};
