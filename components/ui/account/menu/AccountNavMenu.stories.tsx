import { ComponentMeta, ComponentStory } from '@storybook/react';
import AccountNavMenu from './AccountNavMenu';

export default {
  title: 'ui/account/menu/AccountNavMenu',
  component: AccountNavMenu,
  argTypes: [],
} as ComponentMeta<typeof AccountNavMenu>;

const Template: ComponentStory<typeof AccountNavMenu> = () => {
  return <AccountNavMenu />;
};

export const AccountNavMenuBase = Template.bind({});

AccountNavMenuBase.parameters = {
  controls: { hideNoControlsWarning: true },
};
