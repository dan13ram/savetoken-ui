import { createClient } from 'urql';
import { SUPPORTED_NETWORKS } from 'utils/constants';
import { getSubgraphUrl } from 'utils/helpers';

export const clients = SUPPORTED_NETWORKS.reduce(
  (o, chainId) => ({
    ...o,
    [chainId]: createClient({ url: getSubgraphUrl(chainId) }),
  }),
  {},
);
