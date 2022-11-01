import { Box, Container, Sidebar } from '@components/ui';

export interface ISidebarLayout {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Box className="flex justify-start">
        <Box className="basis-22 shrink-0 grow-0 h-0"></Box>
        <Box className="flex-1">
          <Box>
            <Container>NAVBAR</Container>
          </Box>
          <Box className="pt-12">
            <Container>{children}</Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SidebarLayout;
