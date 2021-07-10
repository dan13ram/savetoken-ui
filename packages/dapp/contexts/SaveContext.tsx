import { useWeb3 } from 'contexts/Web3Context';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_TOKEN_SYMBOL, SIMULATION_NETWORK } from 'utils/constants';
import { SaveToken, SaveTokenFlavors } from 'utils/types';

export type SaveContextType = {
  saveTokenFlavors: SaveToken[];
  saveToken: SaveToken | undefined;
  setSaveToken: React.Dispatch<React.SetStateAction<SaveToken | undefined>>;
  symbol: string;
};

const SaveContext = React.createContext<SaveContextType>({
  saveTokenFlavors: [],
  saveToken: undefined,
  setSaveToken: () => undefined,
  symbol: 'DAI',
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

  const symbol = useMemo(
    () => saveToken?.underlyingToken.symbol || DEFAULT_TOKEN_SYMBOL,
    [saveToken],
  );

  useEffect(() => {
    setTitleSymbol(symbol);
  }, [symbol, setTitleSymbol]);

  return (
    <SaveContext.Provider
      value={{ saveTokenFlavors, saveToken, setSaveToken, symbol }}
    >
      {children}
    </SaveContext.Provider>
  );
};

export const useSave = (): SaveContextType => useContext(SaveContext);
