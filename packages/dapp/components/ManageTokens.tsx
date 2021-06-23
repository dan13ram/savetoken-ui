import { Collapse, StackProps, Text, VStack } from '@chakra-ui/react';
import { ClaimTokens } from 'components/ClaimTokens';
import { DepositTokens } from 'components/DepositTokens';
import { ManageSwitcher } from 'components/ManageSwitcher';
import { WithdrawTokens } from 'components/WithdrawTokens';
import React, { useState } from 'react';

export const ManageTokens: React.FC<StackProps> = props => {
  const [selected, setSelected] = useState(0);
  return (
    <VStack spacing="1rem" pt="1.5rem" align="stretch" w="100%" {...props}>
      <Text textAlign="center" fontWeight="bold">
        How much would you like to manage your savings?
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
