import { Box } from '@components/ui';

export interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <Box className="pl-27 pr-27 w-full max-w-screen-2xl mx-auto">{children}</Box>;
};

export default Container;
