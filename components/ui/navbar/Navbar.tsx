import { SingleText } from '@components/typography';
import { Box, Container } from '@components/ui';

export interface INavbar {
  title: string;
}

const Navbar: React.FC<INavbar> = ({ title }) => {
  return (
    <Box className="shadow-[0_2px_25px_rgba(0,0,0,0.05)]">
      <Container>
        <Box className="flex justify-between py-4">
          <Box className="flex items-center gap-8">
            <SingleText type="text-400" weight="font-medium">
              {title}
            </SingleText>
          </Box>
          <Box className="flex items-center gap-8">
            <Box>Cart Svg</Box>
            <Box>App settings</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
