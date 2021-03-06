import { Flex, FlexProps, SimpleGrid, Text } from '@chakra-ui/react';
import { SaveToken } from 'components/basic/SaveToken';
import { useSave } from 'contexts/SaveContext';
import { useWeb3 } from 'contexts/Web3Context';
import { utils } from 'ethers';
import React from 'react';

export const TokenBalance: React.FC<FlexProps> = props => {
  const { isConnected } = useWeb3();
  const {
    tokenBalance,
    rewardBalance,
    balanceInUSD,
    tokenSymbol,
    saveToken,
  } = useSave();
  const isDisabled = !saveToken || !isConnected;

  if (isDisabled) return null;
  const {
    underlyingToken: { decimals },
    rewardToken,
  } = saveToken;

  const balance = Number(utils.formatUnits(tokenBalance, decimals));
  const balanceValue = balance.toFixed(0);

  const reward = Number(
    utils.formatUnits(rewardBalance, rewardToken?.decimals),
  );
  const rewardValue =
    reward < 1 ? `.${reward.toFixed(2).split('.')[1]}` : reward.toFixed(2);
  const rewardSymbol = rewardToken?.symbol;

  const [usdValue, usdDecimals] = balanceInUSD.toFixed(2).split('.');

  return (
    <Flex pt="1.5rem" w="100%" justify="center" align="center" {...props}>
      <Flex
        pt="calc(3.5rem - 6px)"
        w="100%"
        direction="column"
        border="3px solid black"
        borderRadius="1rem"
        position="relative"
      >
        <Flex
          justify="center"
          align="center"
          w="calc(100% + 6px)"
          border="3px solid black"
          bg="grey6"
          borderRadius="1rem"
          h={{ base: '3rem', sm: '3.5rem' }}
          fontWeight="bold"
          fontSize={{ base: 'md', sm: 'lg' }}
          position="absolute"
          top="-3px"
          left="-3px"
        >
          <Text textAlign="center">
            <Text as="span">{'Your current '}</Text>
            <SaveToken as="span" />
            <Text as="span">{' balance is:'}</Text>
          </Text>
        </Flex>
        <SimpleGrid
          columns={rewardSymbol ? 3 : 2}
          gap={0}
          h={{ base: '4rem', sm: '5rem' }}
          fontWeight="bold"
          mt={{ base: '-0.5rem', sm: '0rem' }}
        >
          <Flex justify="center" align="center">
            <Flex
              align="flex-end"
              transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
            >
              <Text fontSize="3xl" fontFamily="mono" lineHeight="80%">
                {balanceValue}
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
          {rewardSymbol && (
            <Flex justify="center" align="center" borderLeft="3px solid black">
              <Flex
                align="flex-end"
                transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
              >
                <Text fontSize="3xl" fontFamily="mono" lineHeight="80%">
                  {rewardValue}
                </Text>
                <Text
                  ml="0.25rem"
                  fontSize="lg"
                  fontFamily="grotesk"
                  lineHeight="80%"
                >
                  {rewardSymbol}
                </Text>
              </Flex>
            </Flex>
          )}
          <Flex justify="center" align="center" borderLeft="3px solid black">
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
    </Flex>
  );
};
