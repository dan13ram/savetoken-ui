import { StackProps, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const SaveTokens: React.FC<StackProps> = props => (
  <VStack spacing="1rem" {...props}>
    <Text textAlign="center"> Save Tokens UI </Text>
  </VStack>
);
