import { Collapse, StackProps, VStack } from '@chakra-ui/react';
import { DepositTokens } from 'components/deposit/DepositTokens';
import { ManageTokens } from 'components/manage/ManageTokens';
import { FlavourSwitcher } from 'components/shared/FlavourSwitcher';
import { SaveSwitcher } from 'components/shared/SaveSwitcher';
import { TokenBalance } from 'components/shared/TokenBalance';
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
