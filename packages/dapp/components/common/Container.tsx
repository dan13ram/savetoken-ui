import { StackProps, VStack } from '@chakra-ui/react';
import React from 'react';

export const PageContainer: React.FC<StackProps> = ({ children, ...props }) => (
  <VStack
    w="100%"
    spacing="1rem"
    p="1rem"
    pb="4rem"
    maxW="35rem"
    align="stretch"
    {...props}
  >
    {children}
  </VStack>
);
