import SidebarLayout from '@components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '@pages/_app';

const CommunityPage: NextPageWithLayout = () => {
  return <section>Community Page</section>;
};

export default CommunityPage;

CommunityPage.properties = {
  pageAuth: { isAuthRequired: true, authLevel: 'Customers' },
  getLayout: (page) => {
    return <SidebarLayout pageTitle="Community">{page}</SidebarLayout>;
  },
};
