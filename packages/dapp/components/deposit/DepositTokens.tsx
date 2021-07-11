import { StackProps, Text, VStack } from '@chakra-ui/react';
import { Input } from 'components/basic/Input';
import { DepositEstimates } from 'components/deposit/DepositEstimates';
import { DepositProvider, useDeposit } from 'contexts/DepositContext';
import { useSave } from 'contexts/SaveContext';
import { useWeb3 } from 'contexts/Web3Context';
import { utils } from 'ethers';
import React, { ChangeEvent, useCallback } from 'react';

const DepositTokensInner: React.FC<StackProps> = props => {
  const { isConnected } = useWeb3();
  const { tokenSymbol, saveToken } = useSave();
  const {
    valueInput,
    setValueInput,
    setValue,
    onDeposit,
    isDepositing,
  } = useDeposit();
  const isDisabled = !saveToken;
  const decimals = saveToken?.underlyingToken.decimals || 18;
  const setDepositValue = useCallback(
    (_value: string) => {
      setValueInput(_value);
      setValue(utils.parseUnits(_value || '0', decimals));
    },
    [setValueInput, setValue, decimals],
  );
  return (
    <VStack spacing="1.25rem" pt="1.5rem" w="100%" {...props}>
      <Text
        textAlign="center"
        fontWeight="bold"
        color={isDisabled ? 'grey4' : 'black'}
        pointerEvents={isDisabled ? 'none' : 'initial'}
      >
        {`How much `}
        <Text as="span" fontFamily="grotesk">
          {tokenSymbol}
        </Text>
        {` would you like to save?`}
      </Text>
      <Input
        placeholder={`${tokenSymbol} Deposit Amount`}
        buttonText={isConnected ? 'Deposit' : 'Simulate'}
        isDisabled={!saveToken}
        buttonColor={isConnected ? saveToken?.color : 'greyGradient'}
        value={valueInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setDepositValue(e.target.value);
        }}
        fontWeight="bold"
        type="number"
        onMax={() => setDepositValue('100')}
        onButtonClick={onDeposit}
        isButtonLoading={isDepositing}
      />
      {!isDisabled && <DepositEstimates />}
    </VStack>
  );
};

export const DepositTokens: React.FC<StackProps> = props => (
  <DepositProvider>
    <DepositTokensInner {...props} />
  </DepositProvider>
);
