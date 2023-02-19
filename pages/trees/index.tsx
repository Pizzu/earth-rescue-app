import SidebarLayout from '@components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '@pages/_app';

const TreesPage: NextPageWithLayout = () => {
  return <section>Trees Page</section>;
};

export default TreesPage;

TreesPage.properties = {
  pageAuth: { isAuthRequired: true, authLevel: 'Customers' },
  getLayout: (page) => {
    return <SidebarLayout pageTitle="Trees">{page}</SidebarLayout>;
  },
};
