import { Flex } from '@chakra-ui/react';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Flex
    w="100%"
    direction="column"
    align="center"
    fontFamily="body"
    bgColor="white"
    color="black"
  >
    {children}
  </Flex>
);
