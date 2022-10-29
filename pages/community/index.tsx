import SidebarLayout from '@components/templates/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '@pages/_app';

const CommunityPage: NextPageWithLayout = () => {
  return <section>Community Page</section>;
};

export default CommunityPage;

CommunityPage.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};