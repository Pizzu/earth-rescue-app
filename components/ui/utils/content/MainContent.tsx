import { Container } from '@components/ui';

export interface IMainContent {
  children?: React.ReactNode;
}

const MainContent: React.FC<IMainContent> = ({ children }) => {
  return (
    <div className="pt-12">
      <Container>{children}</Container>
    </div>
  );
};

export default MainContent;
