import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { Layout } from 'components/shared/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { globalStyles, theme } from 'styles/theme';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider resetCSS theme={theme}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <ColorModeScript initialColorMode="light" />
    <Global styles={globalStyles} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default App;
