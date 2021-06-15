import { StackProps, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const DepositTokens: React.FC<StackProps> = props => (
  <VStack spacing="1rem" {...props}>
    <Text textAlign="center">Deposit</Text>
  </VStack>
);
