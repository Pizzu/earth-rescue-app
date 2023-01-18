import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar, { IAvatar } from './Avatar';
import { mockAvatarProps } from './Avatar.mocks';

export default {
  title: 'ui/Avatar',
  component: Avatar,
  argTypes: [],
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const AccountNavBase = Template.bind({});

AccountNavBase.args = {
  ...mockAvatarProps.avatar,
} as IAvatar;
