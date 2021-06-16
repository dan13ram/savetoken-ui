import { Flex } from '@chakra-ui/react';
import { SaveToken } from 'components/common/SaveToken';
import { WalletIndicator } from 'components/shared/WalletIndicator';
import { useWeb3 } from 'contexts/Web3Context';
import React from 'react';

export const Header: React.FC = () => {
  const { titleSymbol } = useWeb3();
  return (
    <Flex w="100%" justify="center" align="center" position="relative">
      <SaveToken fontSize="3.5rem" symbol={titleSymbol} />
      <Flex position="absolute" right="0" top="0" bottom="0">
        <WalletIndicator />
      </Flex>
    </Flex>
  );
};
