import { Button as ChakraButton, Flex, Text } from '@chakra-ui/react';
import React from 'react';

type Props = React.ComponentProps<typeof ChakraButton>;

export const Button: React.FC<Props> = ({
  children,
  background: inputBackground,
  bg: inputBg,
  ...props
}) => {
  const background = inputBackground || inputBg;
  const reverse = background === 'greyGradient';
  return (
    <ChakraButton
      border="3px solid #000000"
      background="none"
      position="relative"
      overflow="hidden"
      {...props}
    >
      <Flex
        w="100%"
        h="100%"
        position="absolute"
        left={reverse ? undefined : '0'}
        right={reverse ? '0' : undefined}
        top="0"
        transition="width 0.25s"
        _hover={{
          w: '200%',
        }}
        background={background}
      />
      <Text
        top="0"
        left="0"
        textAlign="center"
        transform="translate(0%, 0%)"
        pointerEvents="none"
      >
        {children}
      </Text>
    </ChakraButton>
  );
};
