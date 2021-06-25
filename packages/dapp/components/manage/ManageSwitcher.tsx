import { ButtonProps, Flex } from '@chakra-ui/react';
import { Button } from 'components/basic/Button';
import { useSave } from 'contexts/SaveContext';
import React from 'react';

const SwitchButton: React.FC<ButtonProps & {
  index: number;
  selected: number;
  select: () => void;
}> = ({ selected: selectedIndex, index, select, bg, ...props }) => {
  const selected = selectedIndex % 3 === index;

  const zIndex = index === 1 ? '1' : 'initial';
  const isDisabled = !bg;
  let bgColor = selected ? bg : 'greyGradient';
  if (isDisabled) {
    bgColor = 'grey6';
  }
  return (
    <Button
      onClick={select}
      textTransform="uppercase"
      w={{ base: '7.5rem', xs: '8.25rem', sm: '8.5rem', md: '9.65rem' }}
      px={{ base: '1rem', sm: '2.55rem' }}
      h="calc(100% + 6px)"
      size="sm"
      borderRadius="full"
      position="absolute"
      left="-3px"
      top="-3px"
      fontFamily="mono"
      fontSize={{ base: 'sm', sm: 'md' }}
      _hover={{ bg: 'grey4' }}
      border={isDisabled ? '3px solid #F2F2F2' : '3px solid black'}
      bg={bgColor}
      zIndex={selected ? '2' : zIndex}
      fontWeight={selected && !isDisabled ? 'bold' : 'normal'}
      color={isDisabled ? 'grey4' : 'black'}
      {...props}
    />
  );
};

type Props = {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};

export const ManageSwitcher: React.FC<Props> = ({ selected, setSelected }) => {
  const { saveToken } = useSave();
  const bg = saveToken?.color;
  const isDisabled = !saveToken;
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      pointerEvents={isDisabled ? 'none' : 'initial'}
    >
      <Flex
        border={isDisabled ? '3px solid #F2F2F2' : '3px solid black'}
        borderRadius="full"
        w="100%"
        maxW={{ base: '21rem', xs: '22rem', sm: '23rem', md: '26.5rem' }}
        position="relative"
        h="2rem"
      >
        <SwitchButton
          index={0}
          selected={selected}
          select={() => setSelected(0)}
          bg={bg}
        >
          Deposit
        </SwitchButton>
        <SwitchButton
          index={1}
          selected={selected}
          select={() => setSelected(1)}
          bg={bg}
          left="0"
          right="0"
          mx="auto"
        >
          Claim
        </SwitchButton>
        <SwitchButton
          index={2}
          selected={selected}
          select={() => setSelected(2)}
          bg={bg}
          left={undefined}
          right="-3px"
        >
          Withdraw
        </SwitchButton>
      </Flex>
    </Flex>
  );
};
