import SidebarLayout from '@components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '@pages/_app';

const NewsPage: NextPageWithLayout = () => {
  return <section>News Page</section>;
};

export default NewsPage;

NewsPage.getLayout = (page) => {
  return <SidebarLayout pageTitle="News">{page}</SidebarLayout>;
};
