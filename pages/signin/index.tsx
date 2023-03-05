import { RegisterLayout } from '@components/layouts';
import { TextLink } from '@components/link';
import { HeadingText, SingleText } from '@components/typography';
import { Card, SignInForm } from '@components/ui';
import { useAuthStore } from '@store/index';
import { NextPageWithLayout } from '../_app';

const SigninPage: NextPageWithLayout = () => {
  const setError = useAuthStore((state) => state.setError);

  const resetErrors = () => {
    setError(null);
  };

  return (
    <section>
      <Card background="bg-neutral-100">
        <div className="px-12 py-16">
          <div className="flex flex-col gap-6">
            <HeadingText elementTag="h3" type="text-headingThree">
              Sign In
            </HeadingText>
            <div className="flex justify-start items-center gap-1">
              <SingleText type={'text-200'}>{"Don't you have an account?"}</SingleText>
              <span onClick={resetErrors}>
                <TextLink href={'/signup'} type={'text-200'}>
                  Sign Up
                </TextLink>
              </span>
            </div>
            <SignInForm />
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
