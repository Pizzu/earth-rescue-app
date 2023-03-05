import { Auth, CognitoUser } from '@aws-amplify/auth';
import { SingleText } from '@components/typography';
import { Button, Input } from '@components/ui';
import { useAuthStore } from '@store/index';
import { ISignupInput } from '@type/forms';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

const SignUpForm: React.FC = () => {
  const methods = useForm<ISignupInput>();
  const signUpPayload = useAuthStore((state) => state.signUpPayload);
  const setSignUpPayload = useAuthStore((state) => state.setSignUpPayload);
  const showCode = useAuthStore((state) => state.showCode);
  const setShowCode = useAuthStore((state) => state.setShowCode);
  const setIsLoading = useAuthStore((state) => state.setIsAuthLoading);
  const error = useAuthStore((state) => state.error);
  const setError = useAuthStore((state) => state.setError);

  const onSubmit: SubmitHandler<ISignupInput> = async (data) => {
    if (error) {
      setError(null);
    }
    if (showCode && signUpPayload) {
      console.log('Confirm signUp');
      confirmSignUp({ ...signUpPayload, code: data.code });
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
      setSignUpPayload({ email, password, code: '' });
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
      await Auth.signIn(email, password);
    } catch (err) {
      if (err instanceof Error) {
        setIsLoading(false);
        setError(err.message);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-6" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          {showCode ? (
            <Input label="Code Number" keyInput="code" type="number" placeholder="Code Number" />
          ) : (
            <>
              <Input label="Email" keyInput="email" type="email" placeholder="Email" />
              <Input label="Password" keyInput="password" type="password" placeholder="Password" />
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
    </FormProvider>
  );
};

export default SignUpForm;
