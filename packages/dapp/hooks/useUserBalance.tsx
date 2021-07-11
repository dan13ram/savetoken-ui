import { BigNumber } from 'ethers';
import { useUSDRate } from 'hooks/useUSDRate';
import { useEffect, useState } from 'react';

export type BalanceType = {
  tokenBalance: BigNumber;
  setTokenBalance: React.Dispatch<React.SetStateAction<BigNumber>>;
  tokenBalanceInUSD: BigNumber;
  rewardBalance: BigNumber;
};

export const useUserBalance = (tokenSymbol: string): BalanceType => {
  const [tokenBalance, setTokenBalance] = useState(
    BigNumber.from('500000000000000000000'),
  );
  const [tokenBalanceInUSD, setTokenBalanceInUSD] = useState(
    BigNumber.from('0'),
  );
  const [rewardBalance] = useState(BigNumber.from('80000000000000000'));

  const usdValue = useUSDRate(tokenSymbol);

  useEffect(() => {
    setTokenBalanceInUSD(tokenBalance.mul(usdValue));
  }, [usdValue, tokenBalance]);

  return {
    tokenBalance,
    setTokenBalance,
    tokenBalanceInUSD,
    rewardBalance,
  };
};
