import { BigNumber, utils } from 'ethers';
import { useUSDRate } from 'hooks/useUSDRate';
import { useEffect, useMemo, useState } from 'react';
import { SaveToken } from 'utils/types';

export type BalanceType = {
  tokenBalance: BigNumber;
  setTokenBalance: React.Dispatch<React.SetStateAction<BigNumber>>;
  rewardBalance: BigNumber;
  balanceInUSD: number;
};

export const useUserBalance = (saveToken: SaveToken): BalanceType => {
  const [tokenBalance, setTokenBalance] = useState(BigNumber.from('0'));
  const [balanceInUSD, setBalanceInUSD] = useState(0);
  const [rewardBalance, setRewardBalance] = useState(BigNumber.from('0'));

  const tokenSymbol = saveToken?.underlyingToken?.symbol;
  const rewardSymbol = saveToken?.rewardToken?.symbol;

  useEffect(() => {
    if (tokenSymbol) {
      setTokenBalance(BigNumber.from('500000000000000000000'));
    }
  }, [tokenSymbol]);

  useEffect(() => {
    if (rewardSymbol) {
      setRewardBalance(BigNumber.from('80000000000000000'));
    }
  }, [rewardSymbol]);

  const tokenUSDRate = useUSDRate(tokenSymbol);
  const rewardUSDRate = useUSDRate(rewardSymbol);

  const tokenDecimals = saveToken?.underlyingToken?.decimals;
  const rewardDecimals = saveToken?.rewardToken?.decimals;

  const tokenBalanceNum = useMemo(
    () => Number(utils.formatUnits(tokenBalance, tokenDecimals)),
    [tokenBalance, tokenDecimals],
  );

  const rewardBalanceNum = useMemo(
    () => Number(utils.formatUnits(rewardBalance, rewardDecimals)),
    [rewardBalance, rewardDecimals],
  );

  useEffect(() => {
    setBalanceInUSD(
      tokenBalanceNum * tokenUSDRate + rewardBalanceNum * rewardUSDRate,
    );
  }, [tokenUSDRate, tokenBalanceNum, rewardUSDRate, rewardBalanceNum]);

  return {
    tokenBalance,
    setTokenBalance,
    balanceInUSD,
    rewardBalance,
  };
};
