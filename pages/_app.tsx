import { Auth } from '@components/logic';
import SessionProvider from '@providers/SessionProvider';
import { queryClient } from '@query/index';
import { IPageAuthorization } from '@type/auth';
import { Amplify } from 'aws-amplify';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import awsExports from '../src/aws-exports';
import '../styles/globals.css';

Amplify.configure({ ...awsExports, ssr: true });

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  properties?: { pageAuth: IPageAuthorization; getLayout?: (page: ReactElement) => ReactNode };
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  const pageProperties = Component.properties;
  const getLayout = pageProperties?.getLayout ?? ((page) => page);
  const pageAuth = pageProperties?.pageAuth;
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Auth pageAuth={pageAuth}>{getLayout(<Component {...pageProps} />)}</Auth>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
