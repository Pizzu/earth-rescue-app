import SidebarLayout from '@components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '@pages/_app';

const GoalsPage: NextPageWithLayout = () => {
  return <section>Goals Page</section>;
};

export default GoalsPage;

GoalsPage.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};
