import { Flex, StackProps, Text, VStack } from '@chakra-ui/react';
import { Button } from 'components/common/Button';
import { Link } from 'components/common/Link';
import { SaveToken } from 'components/common/SaveToken';
import { DepositTokens } from 'components/DepositTokens';
import { FlavourSwitcher } from 'components/FlavourSwitcher';
import { useWeb3 } from 'contexts/Web3Context';
import React from 'react';

export const Introduction: React.FC<StackProps> = props => {
  const { isConnecting, connectWeb3 } = useWeb3();
  return (
    <VStack spacing="1rem" my="4rem" {...props}>
      <Text textAlign="center">
        <SaveToken as="span" />
        <Text as="span">
          {
            ' is an easy way to open a high-interest, insured savings account - all without a bank!'
          }
        </Text>
      </Text>
      <Text textAlign="center">
        To open an account, all you need to do is make a deposit.
      </Text>
      <Text textAlign="center">
        <Text as="span">{'Your '}</Text>
        <SaveToken as="span" />
        <Text as="span">
          {
            ' account will start earning interest instantly, and your deposit will be protected until the date the insurance expires.'
          }
        </Text>
      </Text>
      <Text textAlign="center">
        <Text as="span">{'Learn more in our: '}</Text>
        <Link
          href="/faq"
          fontWeight="bold"
          borderBottom="1px solid black"
          _hover={{}}
        >
          Frequently Asked Questions
        </Link>
      </Text>
      <Flex h="2rem" />
      <Button
        bg="greyGradient"
        py="1.75rem"
        px="2.5rem"
        size="lg"
        fontSize="1.25rem"
        maxW="20rem"
        w="100%"
        borderRadius="1.25rem"
        onClick={connectWeb3}
        isLoading={isConnecting}
      >
        Connect Wallet to Begin
      </Button>
      <Flex
        justify="center"
        align="center"
        color="black"
        p="1rem"
        opacity="0.25"
        fontWeight="bold"
      >
        <Text textAlign="center">Or Simulate</Text>
      </Flex>
      <FlavourSwitcher />
      <DepositTokens />
    </VStack>
  );
};
