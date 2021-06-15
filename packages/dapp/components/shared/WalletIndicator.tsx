import { CheckIcon } from '@chakra-ui/icons';
import {
  Flex,
  HStack,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { getAddress } from '@ethersproject/address';
import { Button } from 'components/common/Button';
import { useWeb3 } from 'contexts/Web3Context';
import makeBlockie from 'ethereum-blockies-base64';
import React from 'react';
import { getAccountString, getNetworkLabel } from 'utils/helpers';

export const WalletIndicator: React.FC = () => {
  const {
    account,
    connectWeb3,
    chainId,
    isConnected,
    isConnecting,
    disconnect,
    isGnosisSafe,
  } = useWeb3();
  return (
    <Flex align="center" m="1rem">
      {isConnected ? (
        <Popover>
          <PopoverTrigger>
            <HStack
              w="100%"
              p="0.5rem"
              spacing="0.5rem"
              bg="white"
              border="1px solid #D6D6D6"
              boxShadow="0px 8px 16px rgba(0, 0, 0, 0.1)"
              fontSize="xs"
              cursor="pointer"
            >
              <Flex direction="column" justify="space-between">
                <Text textTransform="uppercase" color="greyText">
                  Current Network
                </Text>
                <HStack spacing="0.5rem" fontSize="sm">
                  <Text color="#3F3D4B">{getNetworkLabel(chainId)}</Text>
                  <CheckIcon
                    color="white"
                    bg="#28C081"
                    borderRadius="50%"
                    p="0.2rem"
                    h="1.125rem"
                    w="1.125rem"
                  />
                </HStack>
              </Flex>
              <HStack spacing="0.5rem">
                <Flex w="2.5rem" h="2.5rem">
                  <Image
                    src={makeBlockie(getAddress(account))}
                    alt="ethereum-blockies"
                    w="100%"
                    h="100%"
                  />
                </Flex>
                <Flex direction="column" justify="space-between" fontSize="sm">
                  <Text fontWeight="bold">Connected</Text>
                  <Text>{getAccountString(account)}</Text>
                </Flex>
              </HStack>
            </HStack>
          </PopoverTrigger>
          <PopoverContent
            bg="none"
            boxShadow="none"
            border="none"
            _focus={{ borderColor: 'transparent' }}
            w="0"
            h="0"
            position="relative"
          >
            <Flex
              w="100%"
              minW="20rem"
              justify="center"
              position="absolute"
              left="0"
              right="0"
              transform="translateX(-50%)"
            >
              <Button
                onClick={disconnect}
                isDisabled={isGnosisSafe}
                w="auto"
                borderRadius="full"
                fontFamily="mono"
                fontSize="md"
                size="sm"
                textTransform="uppercase"
                bg="yellowPinkGradient"
              >
                Disconnect
              </Button>
            </Flex>
          </PopoverContent>
        </Popover>
      ) : (
        <Button
          onClick={connectWeb3}
          isLoading={isConnecting}
          borderRadius="full"
          fontFamily="mono"
          fontSize="md"
          size="sm"
          textTransform="uppercase"
          bg="yellowPinkGradient"
        >
          Connect Wallet
        </Button>
      )}
    </Flex>
  );
};
