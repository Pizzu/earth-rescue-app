import { ComponentMeta, ComponentStory } from '@storybook/react';
import AccountNavMenuItem, { IAccountNavMenuItem } from './AccountNavMenuItem';
import { mockAccountNavMenuItemProps } from './AccountNavMenuItem.mocks';

export default {
  title: 'ui/account/item/AccountNavMenuItem',
  component: AccountNavMenuItem,
  argTypes: [],
} as ComponentMeta<typeof AccountNavMenuItem>;

const Template: ComponentStory<typeof AccountNavMenuItem> = (args) => {
  return <AccountNavMenuItem {...args} />;
};

export const SidebarLinkBase = Template.bind({});

SidebarLinkBase.args = {
  ...mockAccountNavMenuItemProps.accountNavMenuItem,
} as IAccountNavMenuItem;
