import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '../../../types/icons';
import TreeIcon from './TreesIcon';
import { mockTreesIconProps } from './TreesIcon.mocks';

export default {
  title: 'icons/HouseIcon',
  component: TreeIcon,
  argTypes: [],
} as ComponentMeta<typeof TreeIcon>;

const Template: ComponentStory<typeof TreeIcon> = (args) => {
  return <TreeIcon {...args} />;
};

export const TreeIconBase = Template.bind({});
export const TreeIconHighlighted = Template.bind({});

TreeIconBase.args = {
  ...mockTreesIconProps.treesIcon,
} as ISvgIcon;

TreeIconHighlighted.args = {
  ...mockTreesIconProps.treesIconHighlighted,
} as ISvgIcon;
