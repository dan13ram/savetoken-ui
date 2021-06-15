import { SafeAppWeb3Modal } from '@gnosis.pm/safe-apps-web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { providers } from 'ethers';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { RPC_URLS } from 'utils/constants';
import { logError } from 'utils/helpers';
import Web3Modal from 'web3modal';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: RPC_URLS,
    },
  },
};

const web3Modal =
  typeof window !== 'undefined'
    ? new SafeAppWeb3Modal({
        cacheProvider: true,
        providerOptions,
      })
    : undefined;

export type Web3ContextType = {
  connectWeb3: () => Promise<void>;
  disconnect: () => Promise<void>;
  isConnecting: boolean;
  isConnected: boolean;
  isGnosisSafe: boolean;
  initialLoadDone: boolean;
  account: string | undefined;
  chainId: number | undefined;
  provider: providers.Web3Provider | undefined;
};

const Web3Context = React.createContext<Web3ContextType>({
  connectWeb3: () => undefined,
  disconnect: () => undefined,
  isConnecting: false,
  isConnected: false,
  isGnosisSafe: false,
  initialLoadDone: false,
  account: undefined,
  chainId: undefined,
  provider: undefined,
});

export type Web3StateType = {
  ethersProvider?: providers.Web3Provider | undefined;
  account?: string | undefined;
  providerChainId?: number | undefined;
};

export const Web3Provider: React.FC = ({ children }) => {
  const [{ providerChainId, ethersProvider, account }, setWeb3State] =
    useState<Web3StateType>({});
  const [isGnosisSafe, setGnosisSafe] = useState(false);
  const [loading, setLoading] = useState(true);
  const [initialLoadDone, setInitialLoadDone] = useState(false);

  const setWeb3Provider = useCallback(async (prov, initialCall = false) => {
    try {
      if (prov) {
        const provider = new providers.Web3Provider(prov);
        const chainId = Number(prov.chainId);
        if (initialCall) {
          const signer = provider.getSigner();
          const gotAccount = await signer.getAddress();
          setWeb3State({
            account: gotAccount,
            ethersProvider: provider,
            providerChainId: chainId,
          });
        } else {
          setWeb3State(_provider => ({
            ..._provider,
            ethersProvider: provider,
            providerChainId: chainId,
          }));
        }
      }
    } catch (error) {
      logError(error);
    }
  }, []);

  const connectWeb3 = useCallback(async () => {
    try {
      setLoading(true);

      const modalProvider = await web3Modal.requestProvider();

      await setWeb3Provider(modalProvider, true);

      const gnosisSafe = await web3Modal.isSafeApp();
      setGnosisSafe(gnosisSafe);

      if (!gnosisSafe) {
        modalProvider.on('accountsChanged', (accounts: string[]) => {
          setWeb3State(_provider => ({
            ..._provider,
            account: accounts[0],
          }));
        });
        modalProvider.on('chainChanged', () => {
          setWeb3Provider(modalProvider);
        });
      }
    } catch (error) {
      logError(error);
    }
    setLoading(false);
  }, [setWeb3Provider]);

  const disconnect = useCallback(async () => {
    (web3Modal as Web3Modal).clearCachedProvider();
    setGnosisSafe(false);
    setWeb3State({});
  }, []);

  useEffect(() => {
    const load = async () => {
      if (
        web3Modal &&
        ((await web3Modal.isSafeApp()) ||
          (web3Modal as Web3Modal).cachedProvider)
      ) {
        await connectWeb3();
      } else {
        setLoading(false);
      }
      setInitialLoadDone(true);
    };
    load();
  }, [connectWeb3]);

  return (
    <Web3Context.Provider
      value={{
        isGnosisSafe,
        provider: ethersProvider,
        connectWeb3,
        isConnecting: loading,
        disconnect,
        chainId: providerChainId,
        account,
        isConnected: !!ethersProvider && !!account,
        initialLoadDone,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = (): Web3ContextType => useContext(Web3Context);
