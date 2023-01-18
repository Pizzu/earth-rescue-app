import { ISidebarLayout } from './SidebarLayout';

const base: ISidebarLayout = {
  pageTitle: 'Dashboard',
  children: '{{component}}',
};

export const mockSidebarLayoutProps = {
  base,
};
