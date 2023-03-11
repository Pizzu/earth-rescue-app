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
  image: string;
  price: number;
  meaning: string;
}
