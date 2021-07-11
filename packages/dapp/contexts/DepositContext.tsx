import { BigNumber } from 'ethers';
import React, { useCallback, useContext, useState } from 'react';

import { useSave } from './SaveContext';

export type DepositContextType = {
  valueInput: string;
  setValueInput: React.Dispatch<React.SetStateAction<string>>;
  value: BigNumber;
  setValue: React.Dispatch<React.SetStateAction<BigNumber>>;
  onDeposit: () => void;
  isDepositing: boolean;
};

const DepositContext = React.createContext<DepositContextType>({
  valueInput: '',
  setValueInput: () => undefined,
  value: BigNumber.from(0),
  setValue: () => undefined,
  onDeposit: () => undefined,
  isDepositing: false,
});

export const DepositProvider: React.FC = ({ children }) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [value, setValue] = useState<BigNumber>(BigNumber.from(0));
  const { setTokenBalance } = useSave();
  const [isDepositing, setIsDepositing] = useState(false);
  const onDeposit = useCallback(() => {
    if (!isDepositing) {
      setIsDepositing(true);
      setTimeout(() => {
        setTokenBalance(b => b.add(value));
        setIsDepositing(false);
      }, 2000);
    }
  }, [value, isDepositing, setTokenBalance]);

  return (
    <DepositContext.Provider
      value={{
        valueInput,
        setValueInput,
        value,
        setValue,
        onDeposit,
        isDepositing,
      }}
    >
      {children}
    </DepositContext.Provider>
  );
};

export const useDeposit = (): DepositContextType => useContext(DepositContext);
