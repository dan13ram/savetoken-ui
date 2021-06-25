import { StackProps, VStack } from '@chakra-ui/react';
import React from 'react';

export const PageContainer: React.FC<StackProps> = ({ children, ...props }) => (
  <VStack
    w="100%"
    spacing="1.25rem"
    p="1rem"
    pb="4rem"
    maxW="37.5rem"
    align="stretch"
    {...props}
  >
    {children}
  </VStack>
);
