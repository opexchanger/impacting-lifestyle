import { ChakraProvider } from '@chakra-ui/react';
import 'highlight.js/styles/base16/equilibrium-gray-dark.css';

import theme from '../styles/theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
