import { ComponentMeta, ComponentStory } from '@storybook/react';
import AccountNav, { IAccountNav } from './AccountNav';
import { mockAccountNavProps } from './AccountNav.mocks';

export default {
  title: 'ui/AccountNav',
  component: AccountNav,
  argTypes: [],
} as ComponentMeta<typeof AccountNav>;

const Template: ComponentStory<typeof AccountNav> = (args) => {
  return <AccountNav {...args} />;
};

export const AccountNavBase = Template.bind({});

AccountNavBase.args = {
  ...mockAccountNavProps.accountNav,
} as IAccountNav;
