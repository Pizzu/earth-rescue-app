import { SidebarLayout } from '@components/layouts';
import { BodyText, HeadingText } from '@components/typography';
import { Card } from '@components/ui';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <div className="grid grid-cols-12 gap-8 items-stretch">
        <div className="col-start-1 col-end-9">
          <Card background="bg-neutral-100">
            <div className="p-8 flex flex-col gap-2">
              <HeadingText elementTag="h2" type="text-headingTwo">
                This is a card
              </HeadingText>
              <BodyText type="text-bodyDefault">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi cupiditate doloremque voluptas illum, consectetur
                consequuntur voluptatum dolorem
              </BodyText>
            </div>
          </Card>
        </div>
        <div className="col-start-9 col-end-13">
          <Card background="bg-neutral-100">
            <div className="p-8 flex flex-col gap-2">
              <HeadingText elementTag="h2" type="text-headingTwo">
                This is a card
              </HeadingText>
              <BodyText type="text-bodyDefault">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi cupiditate doloremque voluptas illum, consectetur
                consequuntur voluptatum dolorem
              </BodyText>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <SidebarLayout pageTitle="Dashboard">{page}</SidebarLayout>;
};
