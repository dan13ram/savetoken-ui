import React, { useContext, useState } from 'react';

export type SaveContextType = {
  isManaging: boolean;
  setIsManaging: React.Dispatch<React.SetStateAction<boolean>>;
};

const SaveContext = React.createContext<SaveContextType>({
  isManaging: false,
  setIsManaging: () => undefined,
});

export const SaveProvider: React.FC = ({ children }) => {
  const [isManaging, setIsManaging] = useState(false);
  return (
    <SaveContext.Provider value={{ isManaging, setIsManaging }}>
      {children}
    </SaveContext.Provider>
  );
};

export const useSave = (): SaveContextType => useContext(SaveContext);
