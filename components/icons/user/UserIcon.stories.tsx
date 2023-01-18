import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '../../../types/icons';
import UserIcon from './UserIcon';
import { mockUserIconProps } from './UserIcon.mocks';

export default {
  title: 'icons/UserIcon',
  component: UserIcon,
  argTypes: [],
} as ComponentMeta<typeof UserIcon>;

const Template: ComponentStory<typeof UserIcon> = (args) => {
  return <UserIcon {...args} />;
};

export const UserIconBase = Template.bind({});
export const UserIconHighlighted = Template.bind({});

UserIconBase.args = {
  ...mockUserIconProps.userIcon,
} as ISvgIcon;

UserIconHighlighted.args = {
  ...mockUserIconProps.userIconHighlighted,
} as ISvgIcon;
