import { StackProps, Text, VStack } from '@chakra-ui/react';
import { Input } from 'components/basic/Input';
import { useSave } from 'contexts/SaveContext';
import React, { ChangeEvent, useState } from 'react';

export const WithdrawTokens: React.FC<StackProps> = props => {
  const { symbol, saveToken } = useSave();
  const [value, setValue] = useState('');
  const rewardSymbol = 'COMP';
  return (
    <VStack spacing="1.25rem" pt="1.5rem" w="100%" {...props}>
      <Text textAlign="center" fontWeight="bold">
        {`How much `}
        <Text as="span" fontFamily="grotesk">
          {symbol}
        </Text>
        {` would you like to withdraw?`}
      </Text>
      <Input
        placeholder="Withdraw Amount"
        buttonText="Withdraw"
        buttonColor={saveToken?.color}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onMax={() => setValue('100')}
      />
      <Text textAlign="center" fontWeight="bold" pt="1.5rem">
        {`Would you like to withdraw your balance of `}
        <Text as="span" fontFamily="grotesk">
          {rewardSymbol}
        </Text>
        ?
      </Text>
      <Input
        placeholder="Withdraw Amount"
        buttonText="Withdraw"
        buttonColor={saveToken?.color}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onMax={() => setValue('100')}
      />
      <Text textAlign="center" fontWeight="bold" pt="1.5rem">
        Would you like to withdraw your full combined balance?
      </Text>
      <Input
        placeholder="Withdraw Amount"
        buttonText="Withdraw"
        buttonColor={saveToken?.color}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onMax={() => setValue('100')}
      />
    </VStack>
  );
};
