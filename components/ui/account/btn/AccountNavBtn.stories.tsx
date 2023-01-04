import { ComponentMeta, ComponentStory } from '@storybook/react';
import AccountNavBtn, { IAccountNavBtn } from './AccountNavBtn';
import { mockaccountNavBtnProps } from './AccountNavBtn.mocks';

export default {
  title: 'ui/account/btn/AccountNavBtn',
  component: AccountNavBtn,
  argTypes: [],
} as ComponentMeta<typeof AccountNavBtn>;

const Template: ComponentStory<typeof AccountNavBtn> = (args) => {
  return <AccountNavBtn {...args} />;
};

export const AccountNavBtnBase = Template.bind({});

AccountNavBtnBase.args = {
  ...mockaccountNavBtnProps.accountNavBtn,
} as IAccountNavBtn;
