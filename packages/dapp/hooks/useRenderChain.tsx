import { Badge, Text, Tooltip } from '@chakra-ui/react';
import { useWeb3 } from 'contexts/Web3Context';
import { MetamaskIcon } from 'icons/MetamaskIcon';
import React, { useCallback } from 'react';
import { NETWORK_NAMES } from 'utils/constants';
import { getWalletProviderName, logError } from 'utils/helpers';
import { addChainToMetaMask } from 'utils/metamask';

export const useRenderChain = (): ((id: number) => JSX.Element) => {
  const { provider } = useWeb3();

  const addChain = useCallback(async chainId => {
    await addChainToMetaMask(chainId).catch(metamaskError => {
      logError(metamaskError);
    });
  }, []);

  const renderChain = useCallback(
    (chainId: number) => {
      const networkName = NETWORK_NAMES[chainId];
      const isWalletMetamask = provider
        ? getWalletProviderName(provider) === 'metamask'
        : undefined;

      return isWalletMetamask ? (
        <Tooltip label={`Click to switch to ${networkName}`}>
          <Badge
            display="inline-flex"
            alignItems="center"
            px={4}
            py={2}
            m={1}
            borderRadius="full"
            border="3px solid black"
            size="1"
            cursor="pointer"
            transition="all 0.25s"
            bg="white"
            _hover={{ bg: '#D6D6D6' }}
            onClick={() => addChain(chainId)}
          >
            <MetamaskIcon boxSize={5} mr={2} />
            {networkName}
          </Badge>
        </Tooltip>
      ) : (
        <Text
          as="span"
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="0.9rem"
          color="black"
        >
          {networkName}
        </Text>
      );
    },
    [addChain, provider],
  );

  return renderChain;
};
