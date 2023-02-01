import { CognitoUser } from '@aws-amplify/auth';
import { Auth, Hub } from 'aws-amplify';
import { createContext, useContext, useEffect, useState } from 'react';

export interface ISessionProvider {
  session?: boolean;
  children: React.ReactNode;
}

const SessionContext = createContext<CognitoUser | null>(null);

const SessionProvider: React.FC<ISessionProvider> = ({ session, children }) => {
  const [user, setUser] = useState<CognitoUser | null>(null);

  useEffect(() => {
    if (session) {
      console.log('We have a session');
    } else {
      checkUserAuth();
    }
  }, [session]);

  useEffect(() => {
    const removeHubListener = Hub.listen('auth', () => {
      console.log('Listerner triggered');
      checkUserAuth();
    });

    return () => {
      removeHubListener();
    };
  }, []);

  const checkUserAuth = async () => {
    try {
      const amplifyUser: CognitoUser = await Auth.currentAuthenticatedUser();
      console.log('AmplifyUser set in provider', amplifyUser);
      // console.log(await Auth.userAttributes(amplifyUser));
      // const data = await Auth.userSession(amplifyUser);
      // const c = data.getAccessToken();
      // console.log(c.payload['cognito:groups']);
      if (amplifyUser) {
        setUser(amplifyUser);
      }
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };

  return <SessionContext.Provider value={user}>{children}</SessionContext.Provider>;
};

export default SessionProvider;

export const useSession = () => {
  return useContext(SessionContext);
};
