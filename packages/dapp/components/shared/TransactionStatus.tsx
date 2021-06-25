import { Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const TransactionStatus: React.FC = () => {
  const transactions = [
    { label: 'Deposit', value: '100', symbol: 'DAI' },
    { label: 'Approve', value: '50', symbol: 'DAI' },
    { label: 'Deposit', value: '100', symbol: 'DAI' },
    { label: 'Approve', value: '50', symbol: 'DAI' },
  ];
  const isDisabled = true;
  return isDisabled ? null : (
    <Flex pr="1rem" zIndex="5">
      <VStack
        borderRadius="1.75rem"
        border="1px solid #D6D6D6"
        boxShadow="0px 8px 16px rgba(0, 0, 0, 0.1)"
        spacing="1rem"
        fontWeight="bold"
        bg="white"
        pt="1rem"
        px="2rem"
        pb="1.5rem"
      >
        <Text
          textTransform="uppercase"
          color="grey2"
          fontWeight="bold"
          textAlign="center"
          fontFamily="mono"
          mx="1.5rem"
        >
          Transactions
        </Text>
        {transactions.map(({ label, value, symbol }) => (
          <Flex justify="space-between" align="center" w="100%">
            <Text fontSize="sm" color="grey4">
              {label}{' '}
            </Text>
            <Flex align="flex-end" color="grey1">
              <Text fontSize="lg" fontFamily="grotesk" lineHeight="80%">
                {value}
              </Text>
              <Text
                ml="0.25rem"
                fontSize="xs"
                lineHeight="80%"
                fontFamily="grotesk"
              >
                {symbol}
              </Text>
            </Flex>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
};
