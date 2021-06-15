import { Collapse } from '@chakra-ui/react';
import { PageContainer } from 'components/common/Container';
import { Introduction } from 'components/Introduction';
import { SaveTokens } from 'components/SaveTokens';
import { SaveProvider } from 'contexts/SaveContext';
import { useWeb3 } from 'contexts/Web3Context';
import React from 'react';

const HomePage: React.FC = () => {
  const { isConnected, initialLoadDone } = useWeb3();
  return (
    <PageContainer>
      {initialLoadDone && (
        <SaveProvider>
          <Collapse in={!isConnected} animateOpacity>
            <Introduction />
          </Collapse>
          <Collapse in={isConnected} animateOpacity>
            <SaveTokens />
          </Collapse>
        </SaveProvider>
      )}
    </PageContainer>
  );
};

export default HomePage;
