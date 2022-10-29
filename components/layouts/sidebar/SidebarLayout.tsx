import { Sidebar } from '@components/ui';

export interface ISidebarLayout {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="pl-36 pr-36 w-full max-w-screen-2xl mx-auto">{children}</div>
    </>
  );
};

export default SidebarLayout;
