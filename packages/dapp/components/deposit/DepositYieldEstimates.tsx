import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Tooltip } from 'components/basic/Tooltip';
import { useDeposit } from 'contexts/DepositContext';
import { useSave } from 'contexts/SaveContext';
import { utils } from 'ethers';
import { useUSDRate } from 'hooks/useUSDRate';
import React, { useState } from 'react';
import { getDateInNumbers } from 'utils/dateHelpers';

export const DepositYieldEstimates: React.FC = () => {
  const {
    tokenSymbol,
    saveToken: {
      color,
      expiry,
      yieldRate,
      insuranceRate,
      underlyingToken: { decimals },
    },
  } = useSave();
  const { value } = useDeposit();
  const isDisabled = value.lte(0);

  const valueNum = Number(utils.formatUnits(value, decimals));

  const yieldNum = (valueNum * yieldRate) / 100;
  const yieldValue = yieldNum.toFixed(1);

  const usdRate = useUSDRate(tokenSymbol);

  const insuredInUSD = (valueNum * usdRate * (100 - insuranceRate)) / 100;
  const lossInUSD = (valueNum * usdRate * insuranceRate) / 100;

  const dateString = getDateInNumbers(new Date(expiry));

  const [showYield, setShowYield] = useState(true);
  const onRateToggle = () => setShowYield(s => !s);

  const [showAmountInsured, setShowAmountInsured] = useState(true);
  const onAmountToggle = () => setShowAmountInsured(s => !s);
  const [usdValue, usdDecimals] = (showAmountInsured ? insuredInUSD : lossInUSD)
    .toFixed(2)
    .split('.');

  return (
    <Flex
      pt="calc(4rem - 6px)"
      w="100%"
      direction="column"
      border={isDisabled ? '3px solid #F2F2F2' : '3px solid black'}
      borderRadius="1rem"
      position="relative"
      color={isDisabled ? 'grey4' : 'black'}
      overflow="hidden"
    >
      <Flex
        justify="center"
        align="center"
        w="calc(100% + 6px)"
        border={isDisabled ? '3px solid #F2F2F2' : '3px solid black'}
        bg="grey6"
        borderRadius="1rem"
        h={{ base: '3.5rem', sm: '4rem' }}
        fontWeight="bold"
        fontSize={{ base: '3xs', xs: '2xs', sm: 'xs', md: 'sm' }}
        position="absolute"
        top="-3px"
        left="-3px"
      >
        <SimpleGrid
          columns={3}
          gap={0}
          w="100%"
          h={{ base: '4rem', sm: '5rem' }}
          fontWeight="bold"
        >
          <Flex
            direction={showYield ? 'column' : 'column-reverse'}
            justify="center"
            align="center"
          >
            <Text
              color={isDisabled || !showYield ? 'grey4' : 'black'}
              onClick={!showYield ? onRateToggle : undefined}
              cursor={showYield ? 'initial' : 'pointer'}
              _hover={showYield ? {} : { color: 'grey2' }}
            >
              Est. Interest Earned <Tooltip title="Insert text here" />
            </Text>
            <Text
              color={isDisabled || showYield ? 'grey4' : 'black'}
              cursor={!showYield ? 'initial' : 'pointer'}
              _hover={!showYield ? {} : { color: 'grey2' }}
              onClick={showYield ? onRateToggle : undefined}
            >
              Est. Insurance Rate <Tooltip title="Insert text here" />
            </Text>
          </Flex>
          <Flex
            direction={showAmountInsured ? 'column' : 'column-reverse'}
            justify="center"
            align="center"
          >
            <Text
              color={isDisabled || !showAmountInsured ? 'grey4' : 'black'}
              onClick={!showAmountInsured ? onAmountToggle : undefined}
              cursor={showAmountInsured ? 'initial' : 'pointer'}
              _hover={showAmountInsured ? {} : { color: 'grey2' }}
            >
              Amount Insured <Tooltip title="Insert text here" />
            </Text>
            <Text
              color={isDisabled || showAmountInsured ? 'grey4' : 'black'}
              cursor={!showAmountInsured ? 'initial' : 'pointer'}
              _hover={!showAmountInsured ? {} : { color: 'grey2' }}
              onClick={showAmountInsured ? onAmountToggle : undefined}
            >
              Max Loss <Tooltip title="Insert text here" />
            </Text>
          </Flex>
          <Flex direction="column" justify="center" align="center">
            <Text color={isDisabled ? 'grey4' : 'black'}>
              Insurance <br />
              Term Ends <Tooltip title="Insert text here" />
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>
      <SimpleGrid
        columns={3}
        gap={0}
        h={{ base: '4.5rem', sm: '5.5rem' }}
        fontWeight="bold"
        mt={{ base: '-1rem', sm: '-0.5rem' }}
      >
        <Flex
          justify="center"
          align="center"
          bg={isDisabled ? 'none' : color}
          pt="0.5rem"
        >
          {showYield ? (
            <Flex
              align="flex-end"
              transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
              overflowX="auto"
              p="0.25rem"
            >
              <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
                {yieldValue}
              </Text>
              <Text
                ml="0.25rem"
                fontSize="lg"
                fontFamily="grotesk"
                lineHeight="80%"
              >
                {tokenSymbol}
              </Text>
            </Flex>
          ) : (
            <Flex
              align="flex-end"
              transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
              p="0.25rem"
            >
              <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
                {insuranceRate.toFixed(1)}
              </Text>
              <Text
                ml="0.25rem"
                fontSize="lg"
                fontFamily="grotesk"
                lineHeight="80%"
              >
                %
              </Text>
            </Flex>
          )}
        </Flex>
        <Flex
          justify="center"
          align="center"
          borderLeft={isDisabled ? '3px solid #F2F2F2' : '3px solid black'}
          borderRight={isDisabled ? '3px solid #F2F2F2' : '3px solid black'}
          pt="0.5rem"
        >
          <Flex
            align="flex-end"
            transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
            overflowX="auto"
            p="0.25rem"
          >
            <Text fontSize="3xl" lineHeight="80%">
              ${usdValue}
            </Text>
            <Text fontSize="lg" lineHeight="80%">
              .{usdDecimals}
            </Text>
          </Flex>
        </Flex>
        <Flex justify="center" align="center" pt="0.5rem">
          <Flex
            align="flex-end"
            transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
          >
            <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
              {dateString}
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};
