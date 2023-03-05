import { RegisterLayout } from '@components/layouts';
import { TextLink } from '@components/link';
import { HeadingText, SingleText } from '@components/typography';
import { Card, SignUpForm } from '@components/ui';
import { useAuthStore } from '@store/index';
import { NextPageWithLayout } from '../_app';

const SignUpPage: NextPageWithLayout = () => {
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
              Create an account
            </HeadingText>
            <div className="flex justify-start items-center gap-1">
              <SingleText type={'text-200'}>Alreadey have an account?</SingleText>
              <span onClick={resetErrors}>
                <TextLink href={'/signin'} type={'text-200'}>
                  Sign In
                </TextLink>
              </span>
            </div>
            <SignUpForm />
          </div>
        </div>
      </Card>
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
