import { Flex } from '@chakra-ui/react';
import { SaveToken } from 'components/common/SaveToken';
import { WalletIndicator } from 'components/shared/WalletIndicator';
import React from 'react';

export const Header: React.FC = () => (
  <Flex w="100%" justify="center" align="center" position="relative">
    <SaveToken symbol="DAI" fontSize="3.5rem" />
    <Flex position="absolute" right="0" top="0" bottom="0">
      <WalletIndicator />
    </Flex>
  </Flex>
);