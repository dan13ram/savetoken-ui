import { Flex, Text } from '@chakra-ui/react';
import { WalletIndicator } from 'components/shared/WalletIndicator';
import React from 'react';

export const Header: React.FC = () => (
  <Flex w="100%" justify="center" align="center" position="relative">
    <Flex align="center" fontSize="4rem">
      <Text as="span" fontFamily="body">
        save
      </Text>
      <Text as="span" fontFamily="grotesk" fontWeight="bold">
        DAI
      </Text>
    </Flex>
    <Flex position="absolute" right="0" top="0" bottom="0">
      <WalletIndicator />
    </Flex>
  </Flex>
);
