import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import 'highlight.js/styles/base16/equilibrium-gray-dark.css';

import { LocaleProvider } from '../context/useLocaleContext';

import theme from '../styles/theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Impacting Lifestyle | Home</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <LocaleProvider value={pageProps.locale}>
          <Component {...pageProps} />
        </LocaleProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
