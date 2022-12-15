import { SingleText } from '@components/typography';
import { AccountNav, Cart, Container, Searchbar } from '@components/ui';

export interface INavbar {
  title: string;
}

const Navbar: React.FC<INavbar> = ({ title }) => {
  return (
    <div className="shadow-[0_2px_25px_rgba(0,0,0,0.05)]">
      <Container>
        <div className="flex justify-between py-3.5">
          <div className="flex items-center gap-8">
            <SingleText type="text-400" weight="font-medium">
              {title}
            </SingleText>
            <div className="w-80">
              <Searchbar />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Cart />
            <AccountNav username="Leslie Alexander" profileImg="/christopher-campbell-rDEOVtE7vOs-unsplash.jpg" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
