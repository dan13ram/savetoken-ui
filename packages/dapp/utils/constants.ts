const { NEXT_PUBLIC_INFURA_ID } = process.env;

const INFURA_ID = NEXT_PUBLIC_INFURA_ID;

export const SUPPORTED_NETWORKS = [80001];

export const SIMULATION_NETWORK = 80001;

export const SAVE_TOKENS_FLAVOURS = {
  80001: {
    ['0x13b6d3cc91d95c3b2e11fdb4bad00fdf1cfc2aac'.toLowerCase()]: {
      color: 'yellowGreenGradient',
    },
  },
};

export const RPC_URLS = {
  1: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  4: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
  42: `https://kovan.infura.io/v3/${INFURA_ID}`,
  100: 'https://rpc.xdaichain.com',
  137: 'https://rpc-mainnet.maticvigil.com',
  80001: 'https://rpc-mumbai.maticvigil.com',
};

export const NETWORK_NAMES = {
  1: 'ETH Mainnet',
  4: 'Rinkeby Testnet',
  42: 'Kovan Testnet',
  100: 'xDai Chain',
  137: 'Polygon Chain',
  80001: 'Mumbai Testnet',
};

export const NETWORK_LABELS = {
  1: 'Mainnet',
  4: 'Rinkeby',
  42: 'Kovan',
  100: 'xDai',
  137: 'Polygon',
  80001: 'Mumbai',
};

export const EXPLORER_URLS = {
  1: 'https://etherscan.io',
  4: 'https://rinkeby.etherscan.io',
  42: 'https://kovan.etherscan.io',
  100: 'https://blockscout.com/xdai/mainnet',
  137: 'https://explorer-mainnet.maticvigil.com',
  80001: 'https://explorer-mumbai.maticvigil.com',
};

export const SUBGRAPH_URLS = {
  1: '',
  4: '',
  42: '',
  100: '',
  137: '',
  80001: 'https://api.thegraph.com/subgraphs/name/dan13ram/savetoken-mumbai',
};
