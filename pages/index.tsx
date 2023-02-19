import { SidebarLayout } from '@components/layouts';
import { BodyText, HeadingText } from '@components/typography';
import { Card, ProductCard } from '@components/ui';
// import { withSSRContext } from 'aws-amplify';
// import { GetServerSideProps } from 'next';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-12 gap-8 items-stretch">
          <div className="col-start-1 col-end-9">
            <Card background="bg-neutral-100">
              <div className="p-8 flex flex-col gap-2">
                <HeadingText elementTag="h2" type="text-headingTwo">
                  This is a card
                </HeadingText>
                <BodyText type="text-bodyDefault">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi cupiditate doloremque voluptas illum,
                  consectetur consequuntur voluptatum dolorem
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi cupiditate doloremque voluptas illum,
                  consectetur consequuntur voluptatum dolorem
                </BodyText>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="grid grid-cols-4 gap-8 items-stretch">
          <ProductCard title={'Avocado'} price={28.9} image={'/avocado.jpg'} meaning={'Creativity'} consume={500} />
          <ProductCard title={'Coffee'} price={22.9} image={'/coffee.jpg'} meaning={'Energy'} consume={50} />
          <ProductCard title={'Baobab'} price={79.9} image={'/baobab.jpg'} meaning={'Life'} consume={3000} />
          <ProductCard title={'Cocoa'} price={16.9} image={'/cocoa.jpg'} meaning={'Creativity'} consume={55} />
        </div>
      </section>
    </>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { Auth } = withSSRContext(context);
//   try {
//     await Auth.currentAuthenticatedUser();
//   } catch (error) {
//     return {
//       redirect: {
//         destination: '/signup',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session: false,
//     },
//   };
// };

Home.properties = {
  pageAuth: { isAuthRequired: true, authLevel: 'Customers' },
  getLayout: (page) => {
    return <SidebarLayout pageTitle="Dashboard">{page}</SidebarLayout>;
  },
};
