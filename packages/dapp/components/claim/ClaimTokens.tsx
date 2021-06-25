import {
  ListItem,
  StackProps,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { Input } from 'components/basic/Input';
import { useSave } from 'contexts/SaveContext';
import React, { ChangeEvent, useState } from 'react';
import { getDateString } from 'utils/dateHelpers';

export const ClaimTokens: React.FC<StackProps> = props => {
  const {
    saveToken: { color, expiry },
  } = useSave();
  const [value, setValue] = useState('');
  return (
    <VStack spacing="1.25rem" pt="1.5rem" w="100%" {...props}>
      <Text textAlign="center" fontWeight="bold">
        How much would you like to claim?
      </Text>
      <Input
        placeholder="Claim Amount"
        buttonText="Claim"
        buttonColor={color}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onMax={() => setValue('100')}
      />
      <Text
        textAlign="center"
        fontSize="xs"
        fontWeight="bold"
        color="grey4"
        textTransform="uppercase"
        fontFamily="mono"
      >
        Insurance Expires: {getDateString(new Date(expiry))}
      </Text>
      <VStack spacing="1.5rem" pt="0.75rem" w="100%" color="grey4">
        <Text fontWeight="bold">Details on claiming:</Text>
        <UnorderedList spacing="1rem">
          <ListItem>
            Below there is space to detail any of the necessary steps, in order
            to make a claim on any of the specific savings pairings.
          </ListItem>
          <ListItem>
            Below there is space to detail any of the necessary steps, in order
            to make a claim on any of the specific savings pairings.
          </ListItem>
          <ListItem>
            Below there is space to detail any of the necessary steps, in order
            to make a claim on any of the specific savings pairings.
          </ListItem>
        </UnorderedList>
      </VStack>
    </VStack>
  );
};
