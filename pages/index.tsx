import SidebarLayout from '@components/templates/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <h1 className="text-displayOne text-primaryBlue">
        Page With Sidebar Layout
      </h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};
