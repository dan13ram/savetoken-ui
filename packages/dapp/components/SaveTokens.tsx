import { Collapse, StackProps, VStack } from '@chakra-ui/react';
import { DepositTokens } from 'components/DepositTokens';
import { FlavourSwitcher } from 'components/FlavourSwitcher';
import { ManageSwitcher } from 'components/ManageSwitcher';
import { ManageTokens } from 'components/ManageTokens';
import { TokenBalance } from 'components/TokenBalance';
import React, { useState } from 'react';

export const SaveTokens: React.FC<StackProps> = props => {
  const [isManaging, setManaging] = useState(false);
  return (
    <VStack spacing="1rem" align="stretch" w="100%" {...props}>
      <ManageSwitcher isManaging={isManaging} setManaging={setManaging} />
      <FlavourSwitcher />
      <TokenBalance />
      <Collapse in={!isManaging}>
        <DepositTokens />
      </Collapse>
      <Collapse in={isManaging}>
        <ManageTokens />
      </Collapse>
    </VStack>
  );
};
