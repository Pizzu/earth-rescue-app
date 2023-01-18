import SidebarLayout from '@components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '@pages/_app';

const CommunityPage: NextPageWithLayout = () => {
  return <section>Community Page</section>;
};

export default CommunityPage;

CommunityPage.getLayout = (page) => {
  return <SidebarLayout pageTitle="Community">{page}</SidebarLayout>;
};
