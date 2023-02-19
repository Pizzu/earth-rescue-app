import { CognitoUser } from '@aws-amplify/auth';

export interface IPageAuthorization {
  isAuthRequired: boolean;
  authLevel?: 'Customers' | 'Administrators' | null;
}

export interface ISessionContext {
  user?: CognitoUser | null;
  isLoading: boolean;
  cognitoGroup?: 'Customers' | 'Administrators' | null;
}
