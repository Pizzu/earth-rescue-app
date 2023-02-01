import SessionProvider from '@providers/SessionProvider';
import { Amplify } from 'aws-amplify';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import awsExports from '../src/aws-exports';
import '../styles/globals.css';

Amplify.configure({ ...awsExports, ssr: true });

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>;
}

export default MyApp;
