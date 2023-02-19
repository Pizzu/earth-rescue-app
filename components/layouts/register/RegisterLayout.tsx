import { Container } from '@components/ui';

export interface IRegisterLayout {
  children: React.ReactNode;
}

const RegisterLayout: React.FC<IRegisterLayout> = ({ children }) => {
  return (
    <>
      <Container>
        <div className="flex items-center justify-center h-screen">{children}</div>
      </Container>
    </>
  );
};

export default RegisterLayout;
