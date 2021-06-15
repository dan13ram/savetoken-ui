import {
  Flex,
  Grid,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Button } from 'components/common/Button';
import React from 'react';
import { getDateString } from 'utils/dateHelpers';

type FlavourItemProps = {
  label: string;
  rate: number;
  color: string;
  expiry: Date;
  onClick: () => void;
};

const FlavourItem: React.FC<FlavourItemProps> = ({
  label,
  rate,
  color,
  expiry,
  onClick,
}) => (
  <Grid
    as="button"
    w="100%"
    px="1rem"
    templateColumns="4fr 1fr"
    fontWeight="bold"
    onClick={onClick}
    cursor="pointer"
    _hover={{ bg: 'blackAlpha.50' }}
  >
    <Flex w="100%" h="100%" direction="column">
      <Text
        textAlign="left"
        w="100"
        fontFamily="mono"
        textTransform="uppercase"
        fontWeight="bold"
      >
        {label}
      </Text>
      <Text
        textAlign="left"
        w="100"
        fontFamily="mono"
        textTransform="uppercase"
        opacity="0.5"
        fontSize="xs"
      >
        {`Expires: ${getDateString(expiry)}`}
      </Text>
    </Flex>
    <Flex w="100%" h="100%" direction="column" justify="center" align="center">
      <Text textAlign="center" w="100%" borderRadius="0.5rem" bg={color}>
        {rate.toFixed(1)}%
      </Text>
    </Flex>
  </Grid>
);

export const FlavourSwitcher: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="greyGradient"
        borderRadius="full"
        px="3rem"
        size="sm"
        w="17.5rem"
      >
        Select Your Saver Flavour!
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay bg="whiteAlpha.900" />
        <ModalContent
          border="3px solid black"
          borderRadius="1rem"
          position="relative"
          mx="1rem"
        >
          <Flex
            justify="center"
            align="center"
            w="calc(100% + 6px)"
            border="3px solid black"
            bg="grey6"
            borderRadius="1rem"
            h="4rem"
            fontWeight="bold"
            fontSize="xl"
            position="absolute"
            top="-3px"
            left="-3px"
          >
            Choose Your Saver Flavour
          </Flex>
          <VStack spacing="1rem" py="1rem" px="1rem" mt="4rem" w="100%">
            <Grid
              w="100%"
              templateColumns="4fr 1fr"
              color="grey4"
              fontWeight="bold"
              px="1rem"
            >
              <Text textAlign="left" w="100">
                Deposit x Interest x Insurance
              </Text>
              <Text textAlign="center" w="100">
                APR%
              </Text>
            </Grid>
            <FlavourItem
              label="DAI x Compound x Cover"
              expiry={new Date()}
              rate={7.423}
              onClick={() => undefined}
              color="yellowGreenGradient"
            />
            <FlavourItem
              label="DAI x Compound x Opyn"
              expiry={new Date()}
              rate={7.423}
              onClick={() => undefined}
              color="yellowPinkGradient"
            />
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};
