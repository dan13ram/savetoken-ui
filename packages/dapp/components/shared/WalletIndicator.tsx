import {
  Button as ChakraButton,
  Flex,
  HStack,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  Tooltip,
  useClipboard,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { getAddress } from '@ethersproject/address';
import { Button } from 'components/common/Button';
import { useWeb3 } from 'contexts/Web3Context';
import { CopyIcon } from 'icons/CopyIcon';
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasCopied, onCopy } = useClipboard(
    account ? getAddress(account) : '',
  );
  return (
    <Flex align="center" m="1rem">
      {isConnected ? (
        <Popover isOpen={isOpen} onClose={onClose}>
          <PopoverTrigger>
            <VStack
              align="flex-end"
              w="100%"
              spacing="0.5rem"
              fontFamily="mono"
              fontSize="sm"
            >
              <HStack
                borderRadius="full"
                border="1px solid #D6D6D6"
                px="1rem"
                spacing="0.75rem"
                fontWeight="bold"
                bg="white"
              >
                <Text textTransform="uppercase" color="grey4">
                  {`Network: `}
                </Text>
                <Text textTransform="uppercase" color="black">
                  {getNetworkLabel(chainId)}
                </Text>
              </HStack>
              <HStack
                borderRadius="full"
                border="1px solid #D6D6D6"
                boxShadow="0px 8px 16px rgba(0, 0, 0, 0.1)"
                px="1rem"
                spacing="0.75rem"
                fontWeight="bold"
                bg="white"
              >
                <Text textTransform="uppercase" color="grey4">
                  {`ID: `}
                </Text>
                <Text
                  as={isGnosisSafe ? 'p' : 'button'}
                  color="black"
                  fontWeight="bold"
                  onClick={isGnosisSafe ? undefined : onOpen}
                  transition="color 0.25s"
                  _hover={{ color: isGnosisSafe ? 'black' : 'blackAlpha.600' }}
                  textTransform="uppercase"
                >
                  {getAccountString(account)}
                </Text>
                <Flex
                  as="button"
                  color="grey4"
                  onClick={onCopy}
                  transition="color 0.25s"
                  _hover={{ color: 'blackAlpha.600' }}
                >
                  <Tooltip
                    label={
                      <Text fontSize="xs">
                        {hasCopied ? 'Copied!' : 'Copy to clipboard'}
                      </Text>
                    }
                    closeOnClick={false}
                    placement="top-end"
                  >
                    <CopyIcon boxSize="0.65rem" />
                  </Tooltip>
                </Flex>
              </HStack>
            </VStack>
          </PopoverTrigger>
          <PopoverContent
            bg="none"
            boxShadow="none"
            border="none"
            _focus={{ borderColor: 'transparent' }}
            visibility="hidden"
          >
            <Flex w="100%" justify="flex-end" pr="1rem">
              <ChakraButton
                onClick={() => {
                  disconnect();
                  onClose();
                }}
                w="auto"
                borderRadius="full"
                fontFamily="mono"
                fontSize="sm"
                size="xs"
                textTransform="uppercase"
                bg="white"
                _hover={{ bg: 'grey5' }}
                border="1px solid #D6D6D6"
                px="1rem"
              >
                Disconnect
              </ChakraButton>
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
