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
  return (
    <ChakraButton
      border="3px solid #000000"
      background={background}
      position="relative"
      overflow="hidden"
      {...props}
    >
      <Flex
        w="150%"
        h="100%"
        position="absolute"
        left="0"
        top="0"
        transform="translateX(-25%)"
        transition="transform 0.25s"
        _hover={{ transform: 'translateX(0%)' }}
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
