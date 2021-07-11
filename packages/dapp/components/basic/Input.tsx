import {
  Button as ChakraButton,
  Input as ChakraInput,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { Button } from 'components/basic/Button';
import React from 'react';

type Props = {
  buttonText: string;
  buttonColor: string | undefined;
  isFixed?: boolean;
  onMax?: () => void;
  onButtonClick?: () => void;
  isButtonLoading?: boolean;
} & InputProps;

export const Input: React.FC<Props> = ({
  isDisabled,
  buttonText,
  onButtonClick,
  isButtonLoading,
  buttonColor = 'greyGradient',
  isFixed = false,
  onMax,
  ...props
}) => {
  const borderColor = isDisabled ? 'grey4' : 'black';
  return (
    <InputGroup
      size="lg"
      border="0"
      w={{ base: '125%', sm: '100%' }}
      maxW="45rem"
      _hover={{ border: '0' }}
      opacity={isDisabled ? '0.25' : 1}
      pointerEvents={isDisabled ? 'none' : 'initial'}
      transform={{ base: 'scale(0.8)', sm: 'scale(1)' }}
    >
      <ChakraInput
        w="100%"
        pl="2rem"
        pr="10.5rem"
        maxW="45rem"
        borderWidth="3px"
        borderStyle="solid"
        borderColor={borderColor}
        _hover={{ borderColor }}
        borderRadius="0.75rem"
        h="calc(3rem + 6px)"
        fontSize={{ base: 'lg', sm: 'md' }}
        _placeholder={{
          fontWeight: 'bold',
          color: isDisabled ? 'black' : 'grey4',
        }}
        _focus={{ boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)' }}
        _invalid={{
          boxShadow: '0 0 0 3px #ef5d5d !important',
        }}
        isDisabled={isFixed}
        _disabled={{ border: `3px solid ${borderColor}`, bg: 'grey6' }}
        fontWeight="bold"
        {...props}
      />
      <InputRightElement h="100%" w="10rem" justify="flex-end">
        <ChakraButton
          variant="link"
          fontWeight="900"
          mr="1rem"
          color="black"
          onClick={onMax}
          visibility={onMax ? 'visible' : 'hidden'}
        >
          MAX
        </ChakraButton>
        <Button
          bg={isDisabled ? 'grey4' : buttonColor}
          _loading={{ bg: buttonColor, _hover: { bg: buttonColor } }}
          h="100%"
          borderRadius="0.75rem"
          fontFamily="mono"
          textTransform="uppercase"
          fontSize="md"
          borderWidth="3px"
          borderStyle="solid"
          borderColor={borderColor}
          onClick={onButtonClick}
          isLoading={isButtonLoading}
          minW="6.5rem"
        >
          {buttonText}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
