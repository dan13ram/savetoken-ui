import { Collapse } from '@chakra-ui/react';
import { PageContainer } from 'components/common/Container';
import { Introduction } from 'components/Introduction';
import { SaveTokens } from 'components/SaveTokens';
import { SaveProvider } from 'contexts/SaveContext';
import { useWeb3 } from 'contexts/Web3Context';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import { SUPPORTED_NETWORKS } from 'utils/constants';
import { getSaveTokenFlavors } from 'utils/saveTokens';
import { SaveTokenFlavors } from 'utils/types';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const saveTokenFlavorsArray = await Promise.all(
    SUPPORTED_NETWORKS.map(chainId => getSaveTokenFlavors(chainId)),
  );
  const saveTokenFlavors: SaveTokenFlavors = {};
  SUPPORTED_NETWORKS.forEach((chainId, index) => {
    saveTokenFlavors[chainId] = saveTokenFlavorsArray[index];
  });
  return {
    props: {
      saveTokenFlavors,
    },
    // revalidate: 1,
  };
};

const HomePage: React.FC<Props> = ({ saveTokenFlavors }) => {
  const { isConnected, initialLoadDone } = useWeb3();
  return (
    <PageContainer>
      <SaveProvider saveTokenFlavors={saveTokenFlavors as SaveTokenFlavors}>
        {initialLoadDone && (
          <>
            <Collapse in={!isConnected} animateOpacity>
              <Introduction />
            </Collapse>
            <Collapse in={isConnected} animateOpacity>
              <SaveTokens />
            </Collapse>
          </>
        )}
      </SaveProvider>
    </PageContainer>
  );
};

export default HomePage;
