import { Flex, VStack } from '@chakra-ui/react';
import { SaveToken } from 'components/basic/SaveToken';
import { TransactionStatus } from 'components/shared/TransactionStatus';
import { WalletIndicator } from 'components/shared/WalletIndicator';
import { useWeb3 } from 'contexts/Web3Context';
import React from 'react';

export const Header: React.FC = () => {
  const { titleSymbol } = useWeb3();
  return (
    <Flex
      w="100%"
      direction={{ base: 'column', md: 'row' }}
      justify={{ base: 'flex-start', sm: 'center' }}
      align="center"
      position="relative"
      px="1rem"
      minH="5rem"
    >
      <SaveToken
        fontSize={{ base: '2.5rem', sm: '3rem', md: '3.5rem' }}
        symbol={titleSymbol}
      />
      <VStack
        position={{ base: 'relative', md: 'absolute' }}
        w={{ base: '100%', md: 'auto' }}
        right="0"
        top="0"
        bottom="0"
        spacing="2rem"
        align="flex-end"
      >
        <WalletIndicator />
        <TransactionStatus />
      </VStack>
    </Flex>
  );
};
