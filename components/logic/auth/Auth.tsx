import { Loader } from '@components/ui';
import { useSession } from '@providers/SessionProvider';
import { IPageAuthorization } from '@type/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Check page authorizations
//  - if page requires user to be authenticated && user is signed in =>
//      - check page authorization level
//        - if match user group => render page
//        - if doesn't => render unauthorized page
//      - send user to login page
//  - if page does not require auth
//      - render page

export interface IAuth {
  pageAuth?: IPageAuthorization;
  children: React.ReactNode;
}

const Auth: React.FC<IAuth> = ({ pageAuth, children }) => {
  const session = useSession();
  const router = useRouter();
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const checkPageAuth = () => {
      if (pageAuth?.isAuthRequired) {
        if (session?.user) {
          if (session?.cognitoGroup === pageAuth.authLevel || session.cognitoGroup === 'Administrators') {
            setShowPage(true);
          } else {
            setShowPage(false);
            router.push('/');
          }
        } else {
          setShowPage(false);
          router.push('/signin');
        }
      } else {
        if (session?.user) {
          if (router.pathname === '/signin' || router.pathname === '/signup') {
            setShowPage(false);
            router.push('/');
          } else {
            setShowPage(true);
          }
        } else {
          setShowPage(true);
        }
      }
    };

    if (pageAuth && session && !session.isLoading) {
      checkPageAuth();
    }
  }, [pageAuth, router, session]);

  if (!session || (session && session?.isLoading)) {
    return <Loader />;
  } else if (showPage) {
    return <>{children}</>;
  }
  return <></>;
};

export default Auth;
