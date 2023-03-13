export interface ISignupInput {
  email: string;
  password: string;
  code: string;
}

export interface ISigninInput {
  email: string;
  password: string;
}

export interface ITreeForm {
  name: string;
  description: string;
  consume: number;
  image: FileList;
  price: number;
  meaning: string;
  stripeId: string;
}

export interface ITreePayload {
  name: string;
  description: string;
  consume: number;
  image: string;
  price: number;
  priceId?: string;
  meaning: string;
}

export interface ICreateStripeTreeResponse {
  result: { priceId: string };
}
