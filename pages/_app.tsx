import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { MainLayout } from "../components/layouts";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const withLayout = Component.getLayout ?? (page => 
    <MainLayout>
      {page}
    </MainLayout>
  );

  return (
    <ChakraProvider theme={theme}>
      { withLayout(<Component {...pageProps} />) }
    </ChakraProvider>
  )
}

export default MyApp
