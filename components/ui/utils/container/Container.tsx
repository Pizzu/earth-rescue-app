export interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <div className="pl-27 pr-27 w-full max-w-screen-2xl mx-auto">{children}</div>;
};

export default Container;
