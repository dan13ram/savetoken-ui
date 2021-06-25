import { BigNumber } from 'ethers';
import React, { useContext, useState } from 'react';

export type DepositContextType = {
  valueInput: string;
  setValueInput: React.Dispatch<React.SetStateAction<string>>;
  value: BigNumber;
  setValue: React.Dispatch<React.SetStateAction<BigNumber>>;
};

const DepositContext = React.createContext<DepositContextType>({
  valueInput: '',
  setValueInput: () => undefined,
  value: BigNumber.from(0),
  setValue: () => undefined,
});

export const DepositProvider: React.FC = ({ children }) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [value, setValue] = useState<BigNumber>(BigNumber.from(0));

  return (
    <DepositContext.Provider
      value={{ valueInput, setValueInput, value, setValue }}
    >
      {children}
    </DepositContext.Provider>
  );
};

export const useDeposit = (): DepositContextType => useContext(DepositContext);
