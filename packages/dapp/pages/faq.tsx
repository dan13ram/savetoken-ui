import { Heading, VStack } from '@chakra-ui/react';
import { PageContainer } from 'components/common/Container';
import React from 'react';

const FAQPage: React.FC = () => (
  <PageContainer>
    <VStack spacing="1rem">
      <Heading> Frequently Asked Questions </Heading>
    </VStack>
  </PageContainer>
);

export default FAQPage;
