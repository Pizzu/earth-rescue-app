import SidebarLayout from '@components/templates/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <section></section>;
};

export default Home;

Home.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};