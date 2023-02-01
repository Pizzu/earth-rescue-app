import { Auth, CognitoUser } from '@aws-amplify/auth';
import { Button, MainContent } from '@components/ui';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NextPageWithLayout } from '../_app';

interface IFormInput {
  email: string;
  password: string;
  code: string;
}

const RegisterPage: NextPageWithLayout = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [showCode, setShowCode] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (showCode) {
      console.log('Confirm signUp');
      confirmSignUp(data);
    } else {
      console.log('SignUp user');
      await signUpWithEmailAndPassword(data);
      setShowCode(true);
    }
  };

  const signUpWithEmailAndPassword: (data: IFormInput) => Promise<CognitoUser | undefined> = async ({ email, password }) => {
    try {
      const { user } = await Auth.signUp({ username: email, password, attributes: { email } });
      return user;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.name);
        console.log(err.message);
      }
    }
  };

  const confirmSignUp: (data: IFormInput) => void = async ({ email, password, code }) => {
    try {
      await Auth.confirmSignUp(email, code);
      const amplifyUser = await Auth.signIn(email, password);
      if (amplifyUser) {
        console.log('I go to home page');
      } else {
        throw new Error("Something went wrong :'(");
      }
    } catch (error) {
      console.log('error confirming sign up', error);
      throw error;
    }
  };

  return (
    <MainContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block py-4 pl-8 pr-8 w-80 h-full text-200 font-medium text-neutral-800 bg-neutral-100 rounded-full border-0.06 placeholder:text-neutral-500 border-neutral-500 focus:ring-primaryGreen focus:border-primaryGreen"
            placeholder="Email"
            required={true}
            {...register('email')}
          />
          <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block py-4 pl-8 pr-8 w-80 h-full text-200 font-medium text-neutral-800 bg-neutral-100 rounded-full border-0.06 placeholder:text-neutral-500 border-neutral-500 focus:ring-primaryGreen focus:border-primaryGreen"
            placeholder="Password"
            required={true}
            {...register('password')}
          />
          {showCode ? (
            <>
              <label htmlFor="number" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                Code
              </label>
              <input
                type="number"
                id="number"
                className="block py-4 pl-8 pr-8 w-80 h-full text-200 font-medium text-neutral-800 bg-neutral-100 rounded-full border-0.06 placeholder:text-neutral-500 border-neutral-500 focus:ring-primaryGreen focus:border-primaryGreen"
                placeholder="Code Number"
                required={true}
                {...register('code')}
              />
            </>
          ) : null}
        </div>
        <Button type="btn-small" color="primary">
          Sign up
        </Button>
      </form>
      <Button
        onClick={async () => {
          try {
            await Auth.signOut();
          } catch (error) {
            console.log('error signing out: ', error);
          }
        }}
        type="btn-small"
        color="primary"
      >
        Logout
      </Button>
    </MainContent>
  );
};

export default RegisterPage;

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       session: true,
//     },
//   };
// };
