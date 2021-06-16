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
import { FlavourItem } from 'components/FlavourItem';
import { useSave } from 'contexts/SaveContext';
import React from 'react';

export const FlavourSwitcher: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { saveToken, setSaveToken, saveTokenFlavors } = useSave();
  return (
    <>
      <Button
        onClick={onOpen}
        bg={saveToken ? saveToken.color : 'greyGradient'}
        borderRadius="full"
        px="3rem"
        size="sm"
        maxW="20rem"
        w="100%"
        fontFamily="mono"
        fontWeight="bold"
      >
        {saveToken
          ? saveToken.label.toUpperCase()
          : 'Select Your Saver Flavour!'}
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
            {saveTokenFlavors.map(saveTokenFlavor => (
              <FlavourItem
                key={saveTokenFlavor.address}
                label={saveTokenFlavor.label}
                expiry={new Date(saveTokenFlavor.expiry)}
                rate={saveTokenFlavor.yieldRate}
                onClick={() => {
                  setSaveToken(saveTokenFlavor);
                  onClose();
                }}
                color={saveTokenFlavor.color}
              />
            ))}
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};
