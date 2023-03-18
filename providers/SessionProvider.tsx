import { CognitoUser } from '@aws-amplify/auth';
import { ISessionContext } from '@type/auth';
import { Auth, Hub } from 'aws-amplify';
import { createContext, useContext, useEffect, useState } from 'react';
export interface ISessionProvider {
  children: React.ReactNode;
}

const SessionContext = createContext<ISessionContext | null>(null);

const SessionProvider: React.FC<ISessionProvider> = ({ children }) => {
  const [userAuth, setUserAuth] = useState<ISessionContext | null>(null);

  useEffect(() => {
    checkUserAuth();
  }, []);

  useEffect(() => {
    const removeHubListener = Hub.listen('auth', () => {
      console.log('Listener triggered');
      checkUserAuth();
    });

    return () => {
      removeHubListener();
    };
  }, []);

  const checkUserAuth = async () => {
    try {
      setUserAuth({ user: null, isLoading: true, cognitoGroup: null });
      const amplifyUser: CognitoUser = await Auth.currentAuthenticatedUser();
      console.log(amplifyUser);
      if (amplifyUser) {
        const currentUserSession = await Auth.userSession(amplifyUser);
        const accessToken = currentUserSession.getAccessToken();
        const userGroup = accessToken.payload['cognito:groups'][0];
        setUserAuth({ user: amplifyUser, isLoading: false, cognitoGroup: userGroup });
      }
    } catch (error) {
      console.log(error);
      setUserAuth({ user: null, isLoading: false, cognitoGroup: null });
    }
  };

  return <SessionContext.Provider value={userAuth}>{children}</SessionContext.Provider>;
};

export default SessionProvider;

export const useSession = () => {
  return useContext(SessionContext);
};
