import { Box, Sidebar } from '@components/ui';

export interface ISidebarLayout {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Box className="flex justify-start">
        <Box className="basis-22 shrink-0 grow-0 h-0"></Box>
        <Box className="pl-36 pr-36 w-full max-w-screen-2xl mx-auto">{children}</Box>
      </Box>
    </>
  );
};

export default SidebarLayout;
