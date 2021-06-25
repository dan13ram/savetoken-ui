import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Tooltip } from 'components/basic/Tooltip';
import { useDeposit } from 'contexts/DepositContext';
import { useSave } from 'contexts/SaveContext';
import React from 'react';

export const DepositRateEstimates: React.FC = () => {
  const { symbol } = useSave();
  const { value } = useDeposit();
  const isDisabled = value.lte(0);

  return (
    <Flex
      pt="calc(3.5rem - 6px)"
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
        h={{ base: '3rem', sm: '3.5rem' }}
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
          h={{ base: '4rem', sm: '5rem' }}
          fontWeight="bold"
          fontFamily="mono"
        >
          <Flex justify="center" align="center">
            <Text
              color={isDisabled ? 'grey4' : 'black'}
              textTransform="uppercase"
            >
              Estimates
            </Text>
          </Flex>
          <Flex justify="center" align="center">
            <Text
              color={isDisabled ? 'grey4' : 'black'}
              textTransform="uppercase"
            >
              Current
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
        <Flex justify="center" align="center" pt="1rem">
          <SimpleGrid columns={2} gap="1rem" p="1rem" fontWeight="bold">
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
            <Flex justify="flex-start" align="center" pl="0.5rem">
              <Flex
                align="flex-end"
                transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
              >
                <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
                  20
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
            <Flex justify="flex-start" align="center" pl="0.5rem">
              <Flex
                align="flex-end"
                transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
              >
                <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
                  2
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
          align="center"
          borderLeft={isDisabled ? '3px solid #F2F2F2' : '3px solid black'}
          pt="1rem"
        >
          <SimpleGrid columns={2} gap="1rem" p="1rem" fontWeight="bold">
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
            <Flex justify="flex-start" align="center" pl="0.5rem">
              <Flex
                align="flex-end"
                transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
              >
                <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
                  20
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
            <Flex justify="flex-start" align="center" pl="0.5rem">
              <Flex
                align="flex-end"
                transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
              >
                <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
                  2
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
