import { SingleText } from '@components/typography';
import { Box, Container } from '@components/ui';

const Navbar: React.FC = () => {
  return (
    <Box className="shadow-[0_2px_25px_rgba(0,0,0,0.05)]">
      <Container>
        <Box className="flex justify-between py-4">
          <Box className="flex items-center gap-8">
            <SingleText type="text-400" weight="font-medium">
              Dashboard
            </SingleText>
            <Box>Search bar</Box>
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
