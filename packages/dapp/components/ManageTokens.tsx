import { Collapse, StackProps, Text, VStack } from '@chakra-ui/react';
import { ClaimTokens } from 'components/ClaimTokens';
import { DepositTokens } from 'components/DepositTokens';
import { ManageSwitcher } from 'components/ManageSwitcher';
import { WithdrawTokens } from 'components/WithdrawTokens';
import { useSave } from 'contexts/SaveContext';
import React, { useState } from 'react';

export const ManageTokens: React.FC<StackProps> = props => {
  const [selected, setSelected] = useState(0);
  const { saveToken } = useSave();
  const isDisabled = !saveToken;
  return (
    <VStack spacing="1.25rem" pt="1.5rem" align="stretch" w="100%" {...props}>
      <Text
        textAlign="center"
        fontWeight="bold"
        pointerEvents={isDisabled ? 'none' : 'initial'}
        color={isDisabled ? 'grey4' : 'black'}
      >
        How would you like to manage your savings?
      </Text>
      <ManageSwitcher selected={selected} setSelected={setSelected} />
      <Collapse in={selected % 3 === 0}>
        <DepositTokens />
      </Collapse>
      <Collapse in={selected % 3 === 1}>
        <ClaimTokens />
      </Collapse>
      <Collapse in={selected % 3 === 2}>
        <WithdrawTokens />
      </Collapse>
    </VStack>
  );
};
