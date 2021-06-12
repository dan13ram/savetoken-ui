import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { Layout } from 'components/shared/Layout';
import { Web3Provider } from 'contexts/Web3Context';
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
    <Web3Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3Provider>
  </ChakraProvider>
);

export default App;
