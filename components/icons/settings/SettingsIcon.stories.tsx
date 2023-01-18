import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '../../../types/icons';
import SettingsIcon from './SettingsIcon';
import { mockSettingsIconProps } from './SettingsIcon.mocks';

export default {
  title: 'icons/SettingsIcon',
  component: SettingsIcon,
  argTypes: [],
} as ComponentMeta<typeof SettingsIcon>;

const Template: ComponentStory<typeof SettingsIcon> = (args) => {
  return <SettingsIcon {...args} />;
};

export const SettingsIconBase = Template.bind({});
export const SettingsIconHighlighted = Template.bind({});

SettingsIconBase.args = {
  ...mockSettingsIconProps.settingsIcon,
} as ISvgIcon;

SettingsIconHighlighted.args = {
  ...mockSettingsIconProps.settingsIconHighlighted,
} as ISvgIcon;
