import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '../../../types/icons';
import LogoutIcon from './LogoutIcon';
import { mockLogoutIconProps } from './LogoutIcon.mocks';

export default {
  title: 'icons/LogoutIcon',
  component: LogoutIcon,
  argTypes: [],
} as ComponentMeta<typeof LogoutIcon>;

const Template: ComponentStory<typeof LogoutIcon> = (args) => {
  return <LogoutIcon {...args} />;
};

export const LogoutIconBase = Template.bind({});
export const LogoutIconHighlighted = Template.bind({});

LogoutIconBase.args = {
  ...mockLogoutIconProps.logoutIcon,
} as ISvgIcon;

LogoutIconHighlighted.args = {
  ...mockLogoutIconProps.logoutIconHighlighted,
} as ISvgIcon;
