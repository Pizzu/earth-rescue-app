import SidebarLayout from '@components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <section>Dashboard page</section>;
};

export default Home;

Home.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};
