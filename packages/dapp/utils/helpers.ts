import { getAddress } from '@ethersproject/address';
import { NETWORK_LABELS } from 'utils/constants';

export const getNetworkLabel = (chainId: number): string =>
  NETWORK_LABELS[chainId] || 'Unknown';

export const logError = (error: Error | undefined): void => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
};

export const getAccountString = (account: string): string => {
  const address = getAddress(account);
  const len = address.length;
  return `${address.substr(0, 6)}...${address.substr(len - 4, len - 1)}`;
};
