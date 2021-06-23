import { StackProps, Text, VStack } from '@chakra-ui/react';
import { Input } from 'components/common/Input';
import { useSave } from 'contexts/SaveContext';
import React, { ChangeEvent, useState } from 'react';

export const ClaimTokens: React.FC<StackProps> = props => {
  const { saveToken } = useSave();
  const [value, setValue] = useState('');
  return (
    <VStack spacing="1rem" pt="1.5rem" w="100%" {...props}>
      <Text textAlign="center" fontWeight="bold">
        How much would you like to claim?
      </Text>
      <Input
        placeholder="Claim Amount"
        buttonText="Claim"
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
