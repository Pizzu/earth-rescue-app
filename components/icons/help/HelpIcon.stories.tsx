import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '../../../types/icons';
import HelpIcon from './HelpIcon';
import { mockHelpIconProps } from './HelpIcon.mocks';

export default {
  title: 'icons/HelpIcon',
  component: HelpIcon,
  argTypes: [],
} as ComponentMeta<typeof HelpIcon>;

const Template: ComponentStory<typeof HelpIcon> = (args) => {
  return <HelpIcon {...args} />;
};

export const HelpIconBase = Template.bind({});
export const HelpIconHighlighted = Template.bind({});

HelpIconBase.args = {
  ...mockHelpIconProps.helpIcon,
} as ISvgIcon;

HelpIconHighlighted.args = {
  ...mockHelpIconProps.helpIconHighlighted,
} as ISvgIcon;
