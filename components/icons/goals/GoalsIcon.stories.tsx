import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '@type/icons';
import GoalsIcon from './GoalsIcon';
import { mockGoalsIconProps } from './GoalsIcon.mocks';

export default {
  title: 'icons/GoalsIcon',
  component: GoalsIcon,
  argTypes: [],
} as ComponentMeta<typeof GoalsIcon>;

const Template: ComponentStory<typeof GoalsIcon> = (args) => {
  return <GoalsIcon {...args} />;
};

export const GoalsIconBase = Template.bind({});
export const GoalsIconHighlighted = Template.bind({});

GoalsIconBase.args = {
  ...mockGoalsIconProps.goalsIcon,
} as ISvgIcon;

GoalsIconHighlighted.args = {
  ...mockGoalsIconProps.goalsIconHighlighted,
} as ISvgIcon;
