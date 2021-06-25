import { Button, Text, VStack } from '@chakra-ui/react';
import { PageContainer } from 'components/basic/Container';
import { useWeb3 } from 'contexts/Web3Context';
import React from 'react';
import { SUPPORTED_NETWORKS } from 'utils/constants';
import { getNetworkLabel } from 'utils/helpers';

export const NetworkNotSupported: React.FC = () => {
  const { disconnect, isGnosisSafe } = useWeb3();
  return (
    <PageContainer align="center">
      <Text textAlign="center" fontSize="lg" fontWeight="bold">
        Current network is not supported!
      </Text>
      <VStack>
        <Text textAlign="center">
          Please switch your wallet to one of the following networks:
        </Text>
        {SUPPORTED_NETWORKS.map(chainId => (
          <Text textAlign="center" key={chainId.toString()}>{`${getNetworkLabel(
            chainId,
          )} (${chainId})`}</Text>
        ))}
      </VStack>
      {!isGnosisSafe && (
        <Button
          onClick={() => {
            disconnect();
          }}
          w="auto"
          borderRadius="full"
          fontFamily="mono"
          fontSize="sm"
          size="sm"
          textTransform="uppercase"
          bg="white"
          _hover={{ bg: '#D6D6D6' }}
          border="3px solid black"
          px="2rem"
        >
          Disconnect
        </Button>
      )}
    </PageContainer>
  );
};
