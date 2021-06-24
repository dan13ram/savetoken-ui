import { Collapse, StackProps, VStack } from '@chakra-ui/react';
import { DepositTokens } from 'components/DepositTokens';
import { FlavourSwitcher } from 'components/FlavourSwitcher';
import { ManageTokens } from 'components/ManageTokens';
import { SaveSwitcher } from 'components/SaveSwitcher';
import { TokenBalance } from 'components/TokenBalance';
import React, { useState } from 'react';

export const SaveTokens: React.FC<StackProps> = props => {
  const [isManaging, setManaging] = useState(false);
  return (
    <VStack spacing="1.25rem" align="stretch" w="100%" {...props}>
      <SaveSwitcher isManaging={isManaging} setManaging={setManaging} />
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
