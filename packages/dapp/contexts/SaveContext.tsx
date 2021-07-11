import { useWeb3 } from 'contexts/Web3Context';
import { BigNumber } from 'ethers';
import { useUserBalance } from 'hooks/useUserBalance';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_TOKEN_SYMBOL, SIMULATION_NETWORK } from 'utils/constants';
import { SaveToken, SaveTokenFlavors } from 'utils/types';

export type SaveContextType = {
  saveTokenFlavors: SaveToken[];
  saveToken: SaveToken | undefined;
  setSaveToken: React.Dispatch<React.SetStateAction<SaveToken | undefined>>;
  tokenSymbol: string;
  tokenBalance: BigNumber;
  setTokenBalance: React.Dispatch<React.SetStateAction<BigNumber>>;
  tokenBalanceInUSD: BigNumber;
  rewardBalance: BigNumber;
};

const SaveContext = React.createContext<SaveContextType>({
  saveTokenFlavors: [],
  saveToken: undefined,
  setSaveToken: () => undefined,
  tokenSymbol: 'DAI',
  tokenBalance: BigNumber.from(0),
  setTokenBalance: () => undefined,
  tokenBalanceInUSD: BigNumber.from(0),
  rewardBalance: BigNumber.from(0),
});

export const SaveProvider: React.FC<{
  saveTokenFlavors: SaveTokenFlavors;
}> = ({ children, saveTokenFlavors: saveTokenFlavorsForChain }) => {
  const { chainId, setTitleSymbol } = useWeb3();

  const [saveTokenFlavors, setSaveTokenFlavors] = useState<SaveToken[]>([]);
  const [saveToken, setSaveToken] = useState<SaveToken | undefined>();

  useEffect(() => {
    setSaveToken(save => (save?.chainId === chainId ? save : undefined));
  }, [chainId]);

  useEffect(() => {
    if (saveTokenFlavorsForChain) {
      setSaveTokenFlavors(
        chainId
          ? saveTokenFlavorsForChain[chainId] || []
          : saveTokenFlavorsForChain[SIMULATION_NETWORK],
      );
    } else {
      setSaveTokenFlavors([]);
    }
  }, [chainId, saveTokenFlavorsForChain]);

  const tokenSymbol = useMemo(
    () => saveToken?.underlyingToken.symbol || DEFAULT_TOKEN_SYMBOL,
    [saveToken],
  );

  useEffect(() => {
    setTitleSymbol(tokenSymbol);
  }, [tokenSymbol, setTitleSymbol]);

  const {
    tokenBalance,
    setTokenBalance,
    tokenBalanceInUSD,
    rewardBalance,
  } = useUserBalance(tokenSymbol);

  return (
    <SaveContext.Provider
      value={{
        saveTokenFlavors,
        saveToken,
        setSaveToken,
        tokenSymbol,
        tokenBalance,
        setTokenBalance,
        tokenBalanceInUSD,
        rewardBalance,
      }}
    >
      {children}
    </SaveContext.Provider>
  );
};

export const useSave = (): SaveContextType => useContext(SaveContext);
