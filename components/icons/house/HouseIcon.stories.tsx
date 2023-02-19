import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '@type/icons';
import HouseIcon from './HouseIcon';
import { mockHouseIconProps } from './HouseIcon.mocks';

export default {
  title: 'icons/HouseIcon',
  component: HouseIcon,
  argTypes: [],
} as ComponentMeta<typeof HouseIcon>;

const Template: ComponentStory<typeof HouseIcon> = (args) => {
  return <HouseIcon {...args} />;
};

export const HouseIconBase = Template.bind({});
export const HouseIconHighlighted = Template.bind({});

HouseIconBase.args = {
  ...mockHouseIconProps.houseIcon,
} as ISvgIcon;

HouseIconHighlighted.args = {
  ...mockHouseIconProps.houseIconHighlighted,
} as ISvgIcon;
