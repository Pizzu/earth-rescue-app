import { MainContent, Navbar, Sidebar } from '@components/ui';

export interface ISidebarLayout {
  pageTitle: string;
  children: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ pageTitle, children }) => {
  return (
    <>
      <Sidebar />
      <div className="flex justify-start">
        <div className="basis-22 shrink-0 grow-0 h-0"></div>
        <div className="flex-1">
          <Navbar title={pageTitle} />
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
