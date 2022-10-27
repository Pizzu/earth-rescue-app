import SidebarLayout from '@components/templates/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '@pages/_app';

const TreesPage: NextPageWithLayout = () => {
  return <section>Trees Page</section>;
};

export default TreesPage;

TreesPage.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};
