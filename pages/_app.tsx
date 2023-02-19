import { Auth } from '@components/logic';
import SessionProvider from '@providers/SessionProvider';
import { IPageAuthorization } from '@type/auth';
import { Amplify } from 'aws-amplify';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
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
    <SessionProvider>
      <Auth pageAuth={pageAuth}>{getLayout(<Component {...pageProps} />)}</Auth>
    </SessionProvider>
  );
}

export default MyApp;
