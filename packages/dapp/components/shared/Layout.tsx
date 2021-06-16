import { Flex } from '@chakra-ui/react';
import { Header } from 'components/shared/Header';
import { NetworkNotSupported } from 'components/shared/NetworkNotSupported';
import { useWeb3 } from 'contexts/Web3Context';
import React from 'react';
import { SUPPORTED_NETWORKS } from 'utils/constants';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { chainId, isConnected } = useWeb3();
  const isNotSupportedNetwork =
    isConnected && !SUPPORTED_NETWORKS.includes(chainId);

  return (
    <Flex
      w="100%"
      direction="column"
      align="center"
      fontFamily="body"
      bgColor="white"
      color="black"
    >
      <Header />
      {isNotSupportedNetwork ? <NetworkNotSupported /> : children}
    </Flex>
  );
};
