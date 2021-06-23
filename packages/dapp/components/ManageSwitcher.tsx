import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

type Props = {
  isManaging: boolean;
  setManaging: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ManageSwitcher: React.FC<Props> = ({
  isManaging,
  setManaging,
}) => (
  <Flex w="100%" justify="center" align="center">
    <Flex
      border="3px solid black"
      borderRadius="full"
      w="100%"
      maxW="17.5rem"
      position="relative"
      h="2rem"
    >
      <Button
        onClick={() => setManaging(false)}
        textTransform="uppercase"
        px="2.55rem"
        h="calc(100% + 6px)"
        size="sm"
        borderRadius="full"
        position="absolute"
        left="-3px"
        top="-3px"
        fontFamily="mono"
        fontSize="md"
        _hover={{ bg: 'grey4' }}
        border="3px solid black"
        bg={isManaging ? 'none' : 'grey6'}
        zIndex={isManaging ? 'initial' : '1'}
        fontWeight={isManaging ? 'normal' : 'bold'}
      >
        Deposit
      </Button>
      <Button
        onClick={() => setManaging(true)}
        textTransform="uppercase"
        px="2.55rem"
        h="calc(100% + 6px)"
        size="sm"
        borderRadius="full"
        position="absolute"
        right="-3px"
        top="-3px"
        fontFamily="mono"
        fontSize="md"
        border="3px solid black"
        _hover={{ bg: 'grey4' }}
        bg={isManaging ? 'grey6' : 'none'}
        zIndex={isManaging ? '1' : 'initial'}
        fontWeight={isManaging ? 'bold' : 'normal'}
      >
        Manage
      </Button>
    </Flex>
  </Flex>
);
