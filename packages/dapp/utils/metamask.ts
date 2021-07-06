import { utils } from 'ethers';
import {
  EXPLORER_URLS,
  NETWORK_CURRENCIES,
  NETWORK_NAMES,
  RPC_URLS,
} from 'utils/constants';
import { logError } from 'utils/helpers';

export const addChainToMetaMask = async (chainId: number): Promise<void> => {
  const { name, symbol } = NETWORK_CURRENCIES[chainId];

  try {
    // eslint-disabled-next-line no-undef
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [
        {
          chainId: utils.hexValue(chainId),
        },
      ],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        // eslint-disabled-next-line no-undef
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: utils.hexValue(chainId),
              chainName: NETWORK_NAMES[chainId],
              nativeCurrency: {
                name,
                symbol,
                decimals: 18,
              },
              rpcUrls: [RPC_URLS[chainId]],
              blockExplorerUrls: [EXPLORER_URLS[chainId]],
            },
          ],
        });
      } catch (addError) {
        logError(addError);
      }
    } else {
      logError(switchError);
    }
  }
};
