import { Flex, SimpleGrid, StackProps, Text, VStack } from '@chakra-ui/react';
import { Tooltip } from 'components/common/Tooltip';
import { useSave } from 'contexts/SaveContext';
import { utils } from 'ethers';
import React from 'react';

type Props = {
  value: string;
};

export const DepositEstimate: React.FC<StackProps & Props> = ({
  value: valueString,
  ...props
}) => {
  const {
    symbol,
    saveToken: {
      underlyingToken: { decimals },
      color,
    },
  } = useSave();
  const value = utils.parseUnits(valueString || '0', decimals);
  const isDisabled = value.lte(0);

  const tokenValue = (2.8).toFixed(1);
  const tokenSymbol = symbol;

  const usd = 90.001;
  const [usdValue, usdDecimals] = usd.toFixed(2).split('.');

  const dateString = '10.02.21';

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
              {valueString || '0'}
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
            <Flex direction="column" justify="center" align="center">
              <Text color={isDisabled ? 'grey4' : 'black'}>
                Est. Interest Earned <Tooltip title="Insert text here" />
              </Text>
              <Text color="grey4">
                Est. Insurance Rate <Tooltip title="Insert text here" />
              </Text>
            </Flex>
            <Flex direction="column" justify="center" align="center">
              <Text color={isDisabled ? 'grey4' : 'black'}>
                Amount Insured <Tooltip title="Insert text here" />
              </Text>
              <Text color="grey4">
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
            <Flex
              align="flex-end"
              transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
            >
              <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
                {tokenValue}
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
            justify="center"
            align="center"
            borderLeft={isDisabled ? '3px solid #F2F2F2' : '3px solid black'}
            borderRight={isDisabled ? '3px solid #F2F2F2' : '3px solid black'}
            pt="0.5rem"
          >
            <Flex
              align="flex-end"
              transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
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
          h={{ base: '4.5rem', sm: '5.5rem' }}
          fontWeight="bold"
          mt={{ base: '-1rem', sm: '-0.5rem' }}
        >
          <Flex justify="center" align="center" pt="0.5rem">
            <Flex
              align="flex-end"
              transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
            >
              <Text fontSize="3xl" fontFamily="body" lineHeight="80%">
                {tokenValue}
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
            justify="center"
            align="center"
            borderLeft={isDisabled ? '3px solid #F2F2F2' : '3px solid black'}
            pt="0.5rem"
          >
            <Flex
              align="flex-end"
              transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
            >
              <Text fontSize="3xl" lineHeight="80%">
                ${usdValue}
              </Text>
              <Text fontSize="lg" lineHeight="80%">
                .{usdDecimals}
              </Text>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Flex>
    </VStack>
  );
};
