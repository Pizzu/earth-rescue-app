import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '../../../types/icons';
import SupportIcon from './SupportIcon';
import { mockSupportIconProps } from './SupportIcon.mocks';

export default {
  title: 'icons/SupportIcon',
  component: SupportIcon,
  argTypes: [],
} as ComponentMeta<typeof SupportIcon>;

const Template: ComponentStory<typeof SupportIcon> = (args) => {
  return <SupportIcon {...args} />;
};

export const SupportIconBase = Template.bind({});
export const SupportIconHighlighted = Template.bind({});

SupportIconBase.args = {
  ...mockSupportIconProps.supportIcon,
} as ISvgIcon;

SupportIconHighlighted.args = {
  ...mockSupportIconProps.supportIconHighlighted,
} as ISvgIcon;
