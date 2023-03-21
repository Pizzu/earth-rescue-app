import { CognitoUser } from '@aws-amplify/auth';

export interface IPageAuthorization {
  isAuthRequired: boolean;
  authLevel?: 'Customers' | 'Administrators' | null;
}

export interface ISessionContext {
  user?: CognitoUserExt | null;
  isLoading: boolean;
  cognitoGroup?: 'Customers' | 'Administrators' | null;
}

export interface UserAttributes {
  sub: string;
  email: string;
  email_verified: string;
}

export interface CognitoUserExt extends CognitoUser {
  attributes: UserAttributes;
}
