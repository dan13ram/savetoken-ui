import { StackProps, Text, VStack } from '@chakra-ui/react';
import { Input } from 'components/basic/Input';
import { useSave } from 'contexts/SaveContext';
import { utils } from 'ethers';
import React, { ChangeEvent, useState } from 'react';

export const WithdrawTokens: React.FC<StackProps> = props => {
  const {
    tokenSymbol,
    rewardBalance,
    tokenBalanceInUSD,
    saveToken: {
      color,
      rewardToken,
      underlyingToken: { decimals },
    },
  } = useSave();
  const reward = Number(
    utils.formatUnits(rewardBalance, rewardToken?.decimals),
  );
  const rewardValue = reward.toFixed(2);
  const rewardSymbol = rewardToken?.symbol;

  const usd = Number(utils.formatUnits(tokenBalanceInUSD, decimals));
  const [usdValue, usdDecimals] = usd.toFixed(2).split('.');

  const [value, setValue] = useState('');
  return (
    <VStack spacing="1.25rem" pt="1.5rem" w="100%" {...props}>
      <Text textAlign="center" fontWeight="bold">
        {`How much `}
        <Text as="span" fontFamily="grotesk">
          {tokenSymbol}
        </Text>
        {` would you like to withdraw?`}
      </Text>
      <Input
        placeholder={`${tokenSymbol} Withdraw Amount`}
        buttonText="Withdraw"
        buttonColor={color}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onMax={() => setValue('100')}
      />
      {rewardSymbol && (
        <>
          <Text textAlign="center" fontWeight="bold" pt="1.5rem">
            {`Would you like to withdraw your balance of `}
            <Text as="span" fontFamily="grotesk">
              {rewardSymbol}
            </Text>
            ?
          </Text>
          <Input
            placeholder={`${rewardSymbol} Withdraw Amount`}
            buttonText="Withdraw"
            buttonColor={color}
            value={`${rewardValue} ${rewardSymbol}`}
            isFixed
          />
        </>
      )}
      <Text textAlign="center" fontWeight="bold" pt="1.5rem">
        Would you like to withdraw your full combined balance?
      </Text>
      <Input
        placeholder={`${tokenSymbol} Withdraw Amount`}
        buttonText="Withdraw"
        buttonColor={color}
        value={`$ ${usdValue}.${usdDecimals}`}
        isFixed
      />
    </VStack>
  );
};
