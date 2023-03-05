import { Auth, CognitoUser } from '@aws-amplify/auth';
import { SingleText } from '@components/typography';
import { Button, Input } from '@components/ui';
import { useAuthStore } from '@store/index';
import { ISigninInput } from '@type/forms';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

const SignInForm: React.FC = () => {
  const methods = useForm<ISigninInput>();
  const setIsLoading = useAuthStore((state) => state.setIsAuthLoading);
  const error = useAuthStore((state) => state.error);
  const setError = useAuthStore((state) => state.setError);

  const onSubmit: SubmitHandler<ISigninInput> = async (data) => {
    if (error) {
      setError(null);
    }
    await signInWithEmailAndPassword(data);
  };

  const signInWithEmailAndPassword: (data: ISigninInput) => Promise<CognitoUser | undefined> = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const user: CognitoUser = await Auth.signIn(email, password);
      return user;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.name);
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      }
    }
  };
  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-6" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <Input label="Email" keyInput="email" type="email" placeholder="Email" />
          <Input label="Password" keyInput="password" type="password" placeholder="Password" />
        </div>
        {error ? (
          <SingleText type="text-200" weight="font-bold" className="text-secondaryRed-700">
            {error}
          </SingleText>
        ) : null}
        <Button type="btn-medium" color="primary">
          Sign In
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
