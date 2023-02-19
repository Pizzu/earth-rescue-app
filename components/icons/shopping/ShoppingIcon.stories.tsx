import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '@type/icons';
import ShoppingIcon from './ShoppingIcon';
import { mockShoppingIconProps } from './ShoppingIcon.mocks';

export default {
  title: 'icons/ShoppingIcon',
  component: ShoppingIcon,
  argTypes: [],
} as ComponentMeta<typeof ShoppingIcon>;

const Template: ComponentStory<typeof ShoppingIcon> = (args) => {
  return <ShoppingIcon {...args} />;
};

export const TreesIconBase = Template.bind({});
export const TreesIconHighlighted = Template.bind({});

TreesIconBase.args = {
  ...mockShoppingIconProps.shoppingIcon,
} as ISvgIcon;

TreesIconHighlighted.args = {
  ...mockShoppingIconProps.shoppingIconHighlighted,
} as ISvgIcon;
