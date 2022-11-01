import { Box, Container } from '@components/ui';

export interface IMainContent {
  children?: React.ReactNode;
}

const MainContent: React.FC<IMainContent> = ({ children }) => {
  return (
    <Box className="pt-12">
      <Container>{children}</Container>
    </Box>
  );
};

export default MainContent;
