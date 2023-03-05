import { Container, Loader } from '@components/ui';
import { useAuthStore } from '@store/index';

export interface IRegisterLayout {
  children: React.ReactNode;
}

const RegisterLayout: React.FC<IRegisterLayout> = ({ children }) => {
  const isLoading = useAuthStore((state) => state.isAuthLoading);
  return (
    <>
      <Container>{isLoading ? <Loader /> : <div className="flex items-center justify-center h-screen">{children}</div>}</Container>
    </>
  );
};

export default RegisterLayout;
