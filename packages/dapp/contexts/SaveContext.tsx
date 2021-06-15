import React, { useContext, useEffect, useState } from 'react';
import { SIMULATION_NETWORK } from 'utils/constants';
import { SaveToken, SaveTokenFlavors } from 'utils/types';

import { useWeb3 } from './Web3Context';

export type SaveContextType = {
  saveTokenFlavors: SaveToken[];
  saveToken: SaveToken | undefined;
  setSaveToken: React.Dispatch<React.SetStateAction<SaveToken | undefined>>;
};

const SaveContext = React.createContext<SaveContextType>({
  saveTokenFlavors: [],
  saveToken: undefined,
  setSaveToken: () => undefined,
});

export const SaveProvider: React.FC<{
  saveTokenFlavors: SaveTokenFlavors;
}> = ({ children, saveTokenFlavors: saveTokenFlavorsForChain }) => {
  const { account, chainId } = useWeb3();

  const [saveTokenFlavors, setSaveTokenFlavors] = useState<SaveToken[]>([]);
  const [saveToken, setSaveToken] = useState<SaveToken | undefined>();

  useEffect(() => {
    setSaveToken(undefined);
    if (saveTokenFlavorsForChain) {
      setSaveTokenFlavors(
        chainId
          ? saveTokenFlavorsForChain[chainId] || []
          : saveTokenFlavorsForChain[SIMULATION_NETWORK],
      );
    } else {
      setSaveTokenFlavors([]);
    }
  }, [account, chainId, saveTokenFlavorsForChain]);

  return (
    <SaveContext.Provider value={{ saveTokenFlavors, saveToken, setSaveToken }}>
      {children}
    </SaveContext.Provider>
  );
};

export const useSave = (): SaveContextType => useContext(SaveContext);
