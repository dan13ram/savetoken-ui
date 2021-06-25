import { Button, Text } from '@chakra-ui/react';
import { PageContainer } from 'components/basic/Container';
import { Link } from 'components/basic/Link';
import React from 'react';

const NotFoundPage: React.FC = () => (
  <PageContainer align="center">
    <Text textAlign="center"> 404 - This page could not be found. </Text>
    <Link href="/" _hover={{}}>
      <Button
        w="auto"
        borderRadius="full"
        fontFamily="mono"
        fontSize="sm"
        size="sm"
        textTransform="uppercase"
        bg="white"
        _hover={{ bg: '#D6D6D6' }}
        border="3px solid black"
        px="2rem"
      >
        Return Home
      </Button>
    </Link>
  </PageContainer>
);

export default NotFoundPage;
