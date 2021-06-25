import { Flex, StackProps, Text, VStack } from '@chakra-ui/react';
import { DepositInsuranceEstimates } from 'components/deposit/DepositInsuranceEstimates';
import { DepositRateEstimates } from 'components/deposit/DepositRateEstimates';
import { useDeposit } from 'contexts/DepositContext';
import { useSave } from 'contexts/SaveContext';
import React from 'react';

export const DepositEstimates: React.FC<StackProps> = ({ ...props }) => {
  const { symbol } = useSave();
  const { value, valueInput } = useDeposit();
  const isDisabled = value.lte(0);

  return (
    <VStack
      spacing="1.25rem"
      pt="1.5rem"
      w="100%"
      pointerEvents={isDisabled ? 'none' : 'initial'}
      {...props}
    >
      <Flex
        px="2rem"
        w="100%"
        justify="space-between"
        color={isDisabled ? 'grey4' : 'black'}
        fontWeight="bold"
      >
        <Text>{`Estimate for Depositing: `}</Text>
        <Flex
          justify="center"
          align="flex-end"
          transform="translateY(-0.125rem)"
        >
          <Flex
            align="flex-end"
            transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
          >
            <Text fontSize="3xl" fontFamily="mono" lineHeight="80%">
              {valueInput || '0'}
            </Text>
            <Text
              ml="0.25rem"
              fontSize="lg"
              fontFamily="grotesk"
              lineHeight="80%"
            >
              {symbol}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <DepositInsuranceEstimates />
      <DepositRateEstimates />
      <Text color="grey4" fontSize="xs" fontWeight="bold" fontFamily="body">
        [Uninsured Interest Rate] - [Estimated Premium Rate Insurance] =
        [Insured Interest Rate]
      </Text>
    </VStack>
  );
};
