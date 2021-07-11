import { useEffect, useState } from 'react';
import { COINGECKO_PRICE_API, COINGECKO_TOKEN_ID } from 'utils/constants';
import { logError } from 'utils/helpers';
import { memoize } from 'utils/memoize';

const fetchUSDRate = memoize(
  async (tokenSymbol: string): Promise<number> => {
    const tokenId = COINGECKO_TOKEN_ID[tokenSymbol];
    if (tokenId) {
      try {
        const api = COINGECKO_PRICE_API.replace('{tokenId}', tokenId);
        const res = await fetch(api);
        const data = await res.json();
        if (data && data[tokenId] && data[tokenId].usd) {
          return data[tokenId].usd;
        }
      } catch (apiError) {
        logError(apiError);
      }
    }
    return 0;
  },
);

export const useUSDRate = (tokenSymbol: string): number => {
  const [usdValue, setUSDRate] = useState(0);

  useEffect(() => {
    fetchUSDRate(tokenSymbol).then(setUSDRate);
  }, [tokenSymbol]);

  return usdValue;
};
