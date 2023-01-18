import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '../../../types/icons';
import TreesIcon from './TreesIcon';
import { mockTreesIconProps } from './TreesIcon.mocks';

export default {
  title: 'icons/TreesIcon',
  component: TreesIcon,
  argTypes: [],
} as ComponentMeta<typeof TreesIcon>;

const Template: ComponentStory<typeof TreesIcon> = (args) => {
  return <TreesIcon {...args} />;
};

export const TreesIconBase = Template.bind({});
export const TreesIconHighlighted = Template.bind({});

TreesIconBase.args = {
  ...mockTreesIconProps.treesIcon,
} as ISvgIcon;

TreesIconHighlighted.args = {
  ...mockTreesIconProps.treesIconHighlighted,
} as ISvgIcon;
