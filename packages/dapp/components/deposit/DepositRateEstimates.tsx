import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Tooltip } from 'components/basic/Tooltip';
import { useDeposit } from 'contexts/DepositContext';
import { useSave } from 'contexts/SaveContext';
import { utils } from 'ethers';
import React from 'react';

export const DepositRateEstimates: React.FC = () => {
  const {
    tokenSymbol,
    saveToken: {
      assetRate,
      yieldRate,
      insuranceRate,
      underlyingToken: { decimals },
    },
  } = useSave();
  const { value } = useDeposit();
  const isDisabled = value.lte(0);

  const insuranceNum =
    (Number(utils.formatUnits(value, decimals)) * insuranceRate) / 100;
  const insuranceValue = insuranceNum.toFixed(1);

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
        fontSize={{ base: 'xs', md: 'sm' }}
        position="absolute"
        top="-3px"
        left="-3px"
      >
        <SimpleGrid
          columns={2}
          gap={0}
          w="100%"
          h={{ base: '4.5rem', sm: '5.5rem' }}
          fontWeight="bold"
          fontFamily="mono"
        >
          <Flex justify="center" align="center">
            <Text
              color={isDisabled ? 'grey4' : 'black'}
              textTransform="uppercase"
            >
              Insurance Estimates
            </Text>
          </Flex>
          <Flex justify="center" align="center">
            <Text
              color={isDisabled ? 'grey4' : 'black'}
              textTransform="uppercase"
              textAlign="center"
              position="relative"
            >
              <Text as="span" textAlign="center">
                Current Interest Rates
              </Text>
              <Text
                as="span"
                fontSize={{ base: '4xs', md: '3xs' }}
                textAlign="center"
                position="absolute"
                top="95%"
                left="50%"
                transform="translateX(-50%)"
                fontWeight="normal"
              >
                [VARIABLE]
              </Text>
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>
      <SimpleGrid
        columns={2}
        gap={0}
        fontWeight="bold"
        mt={{ base: '-1rem', sm: '-0.5rem' }}
      >
        <Flex
          justify="center"
          align="center"
          px={{ base: '0.5rem', md: '1rem' }}
          pt="1rem"
          pb="0.5rem"
          w="100%"
          h="100%"
        >
          <SimpleGrid
            w="100%"
            h="100%"
            columns={2}
            gap={{ base: '0.25rem', md: '0.5rem' }}
            p={{ base: '0.25rem', sm: '0.5rem', md: '1rem' }}
            fontWeight="bold"
            overflowX="auto"
          >
            <Flex
              justify="flex-start"
              align="center"
              fontSize={{ base: '3xs', xs: '2xs', sm: 'xs', md: 'sm' }}
            >
              <Text fontFamily="body">
                Insurance <br />
                Premium <Tooltip title="Insert text here" />
              </Text>
            </Flex>
            <Flex justify="flex-start" align="center" w="100%">
              <Flex
                w="100%"
                align="flex-end"
                transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
                px="0.5rem"
              >
                <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
                  {insuranceValue}
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
            </Flex>
            <Flex
              justify="flex-start"
              align="center"
              fontSize={{ base: '3xs', xs: '2xs', sm: 'xs', md: 'sm' }}
            >
              <Text fontFamily="body">
                Premium <br />
                Rate <Tooltip title="Insert text here" />
              </Text>
            </Flex>
            <Flex justify="flex-start" align="center" w="100%">
              <Flex
                w="100%"
                align="flex-end"
                transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
                px="0.5rem"
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
            </Flex>
          </SimpleGrid>
        </Flex>
        <Flex
          justify="center"
          w="100%"
          h="100%"
          align="center"
          borderLeft={isDisabled ? '3px solid #F2F2F2' : '3px solid black'}
          px={{ base: '0.5rem', md: '1rem' }}
          pt="1rem"
          pb="0.5rem"
        >
          <SimpleGrid
            w="100%"
            h="100%"
            columns={2}
            gap={{ base: '0.25rem', md: '0.5rem' }}
            p={{ base: '0.25rem', sm: '0.5rem', md: '1rem' }}
            fontWeight="bold"
            overflowX="auto"
          >
            <Flex
              justify="flex-start"
              align="center"
              fontSize={{ base: '3xs', xs: '2xs', sm: 'xs', md: 'sm' }}
            >
              <Text fontFamily="body">
                Uninsured <br />
                Interest Rate <Tooltip title="Insert text here" />
              </Text>
            </Flex>
            <Flex justify="flex-start" align="center" w="100%">
              <Flex
                w="100%"
                align="flex-end"
                transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
                px="0.5rem"
              >
                <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
                  {assetRate.toFixed(1)}
                </Text>
                <Text
                  ml="0.25rem"
                  fontSize="lg"
                  fontFamily="grotesk"
                  lineHeight="80%"
                >
                  %
                </Text>
                <Text ml="0.25rem" as="span" fontSize="2xs" lineHeight="80%">
                  APY
                </Text>
              </Flex>
            </Flex>
            <Flex
              justify="flex-start"
              align="center"
              fontSize={{ base: '3xs', xs: '2xs', sm: 'xs', md: 'sm' }}
            >
              <Text fontFamily="body">
                Insured <br />
                Interest Rate <Tooltip title="Insert text here" />
              </Text>
            </Flex>
            <Flex justify="flex-start" align="center" w="100%">
              <Flex
                w="100%"
                align="flex-end"
                transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
                px="0.5rem"
              >
                <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
                  {yieldRate.toFixed(1)}
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
            </Flex>
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};
