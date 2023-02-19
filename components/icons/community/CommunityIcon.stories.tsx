import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '@type/icons';
import CommunityIcon from './CommunityIcon';
import { mockCommunityIconProps } from './CommunityIcon.mocks';

export default {
  title: 'icons/CommunityIcon',
  component: CommunityIcon,
  argTypes: [],
} as ComponentMeta<typeof CommunityIcon>;

const Template: ComponentStory<typeof CommunityIcon> = (args) => {
  return <CommunityIcon {...args} />;
};

export const CommunityIconBase = Template.bind({});
export const CommunityIconHighlighted = Template.bind({});

CommunityIconBase.args = {
  ...mockCommunityIconProps.communityIcon,
} as ISvgIcon;

CommunityIconHighlighted.args = {
  ...mockCommunityIconProps.communityIconHighlighted,
} as ISvgIcon;
