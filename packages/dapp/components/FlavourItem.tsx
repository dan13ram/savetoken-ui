import { Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import { getDateString } from 'utils/dateHelpers';

type FlavourItemProps = {
  label: string;
  rate: number;
  color: string;
  expiry: Date;
  onClick: () => void;
};

export const FlavourItem: React.FC<FlavourItemProps> = ({
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
    borderRadius="0.25rem"
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
