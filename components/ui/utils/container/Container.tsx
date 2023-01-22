export interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <main className="pl-27 pr-27 w-full max-w-screen-2xl mx-auto">{children}</main>;
};

export default Container;
