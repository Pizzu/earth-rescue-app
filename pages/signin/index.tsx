import { Auth, CognitoUser } from '@aws-amplify/auth';
import { RegisterLayout } from '@components/layouts';
import { HeadingText } from '@components/typography';
import { Button, Card } from '@components/ui';
import { ISigninInput } from '@type/forms';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NextPageWithLayout } from '../_app';

const SigninPage: NextPageWithLayout = () => {
  const { register, handleSubmit } = useForm<ISigninInput>();
  const router = useRouter();

  const onSubmit: SubmitHandler<ISigninInput> = async (data) => {
    const user = await signInWithEmailAndPassword(data);
    if (user) {
      router.push('/');
    }
  };

  const signInWithEmailAndPassword: (data: ISigninInput) => Promise<CognitoUser | undefined> = async ({ email, password }) => {
    try {
      const user: CognitoUser = await Auth.signIn(email, password);
      return user;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.name);
        console.log(err.message);
      }
    }
  };

  return (
    <section>
      <Card background="bg-neutral-100">
        <div className="px-12 py-16">
          <div className="flex flex-col gap-6">
            <HeadingText elementTag="h3" type="text-headingThree">
              Sign In
            </HeadingText>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4">
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
              </div>
              <Button type="btn-medium" color="primary">
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default SigninPage;

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       session: true,
//     },
//   };
// };

SigninPage.properties = {
  pageAuth: { isAuthRequired: false },
  getLayout: (page) => {
    return <RegisterLayout>{page}</RegisterLayout>;
  },
};
