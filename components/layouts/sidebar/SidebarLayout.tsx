import { Box, MainContent, Navbar, Sidebar } from '@components/ui';

export interface ISidebarLayout {
  pageTitle: string;
  children: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ pageTitle, children }) => {
  return (
    <>
      <Sidebar />
      <Box className="flex justify-start">
        <Box className="basis-22 shrink-0 grow-0 h-0"></Box>
        <Box className="flex-1">
          <Navbar title={pageTitle} />
          <MainContent>{children}</MainContent>
        </Box>
      </Box>
    </>
  );
};

export default SidebarLayout;
