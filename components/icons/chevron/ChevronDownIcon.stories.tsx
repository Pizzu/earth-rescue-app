import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '../../../types/icons';
import ChevronDownIcon from './ChevronDownIcon';
import { mockChevronDownIconProps } from './ChevronDownIcon.mocks';

export default {
  title: 'icons/ChevronDownIcon',
  component: ChevronDownIcon,
  argTypes: [],
} as ComponentMeta<typeof ChevronDownIcon>;

const Template: ComponentStory<typeof ChevronDownIcon> = (args) => {
  return <ChevronDownIcon {...args} />;
};

export const ChevronDownIconBase = Template.bind({});
export const ChevronDownIconHighlighted = Template.bind({});

ChevronDownIconBase.args = {
  ...mockChevronDownIconProps.chevronDownIcon,
} as ISvgIcon;

ChevronDownIconHighlighted.args = {
  ...mockChevronDownIconProps.chevronDownIconHighlighted,
} as ISvgIcon;
