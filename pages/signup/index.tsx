import { Auth, CognitoUser } from '@aws-amplify/auth';
import { RegisterLayout } from '@components/layouts';
import { HeadingText, SingleText } from '@components/typography';
import { Button, Card, Loader } from '@components/ui';
import { ISignupInput } from '@type/forms';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NextPageWithLayout } from '../_app';

const SignUpPage: NextPageWithLayout = () => {
  const { register, handleSubmit } = useForm<ISignupInput>();
  const [showCode, setShowCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<ISignupInput> = async (data) => {
    if (showCode) {
      console.log('Confirm signUp');
      confirmSignUp(data);
    } else {
      console.log('SignUp user');
      setIsLoading(true);
      await signUpWithEmailAndPassword(data);
      setIsLoading(false);
    }
  };

  const signUpWithEmailAndPassword: (data: ISignupInput) => Promise<CognitoUser | undefined> = async ({ email, password }) => {
    try {
      const { user } = await Auth.signUp({ username: email, password, attributes: { email } });
      setShowCode(true);
      return user;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.name);
        console.log(err.message);
        setIsLoading(false);
        setError(err.message);
      }
    }
  };

  const confirmSignUp: (data: ISignupInput) => void = async ({ email, password, code }) => {
    try {
      setIsLoading(true);
      await Auth.confirmSignUp(email, code);
      const amplifyUser = await Auth.signIn(email, password);
      if (amplifyUser) {
        console.log('I go to home page');
        router.push('/');
      } else {
        setIsLoading(false);
        throw new Error("Something went wrong :'(");
      }
    } catch (err) {
      if (err instanceof Error) {
        setIsLoading(false);
        setError(err.message);
      }
    }
  };

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <Card background="bg-neutral-100">
          <div className="px-12 py-16">
            <div className="flex flex-col gap-6">
              <HeadingText elementTag="h3" type="text-headingThree">
                Create an account
              </HeadingText>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4">
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
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
                {error ? (
                  <SingleText type="text-200" weight="font-bold" className="text-secondaryRed-700">
                    {error}
                  </SingleText>
                ) : null}
                <Button type="btn-medium" color="primary">
                  {showCode ? 'Confirm Code' : 'Sign up'}
                </Button>
              </form>
            </div>
          </div>
        </Card>
      )}
    </section>
  );
};

export default SignUpPage;

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       session: true,
//     },
//   };
// };

SignUpPage.properties = {
  pageAuth: { isAuthRequired: false },
  getLayout: (page) => {
    return <RegisterLayout>{page}</RegisterLayout>;
  },
};
