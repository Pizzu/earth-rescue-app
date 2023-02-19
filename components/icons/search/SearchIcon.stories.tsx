import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '@type/icons';
import SearchIcon from './SearchIcon';
import { mockSearchIconProps } from './SearchIcon.mocks';

export default {
  title: 'icons/SearchIcon',
  component: SearchIcon,
  argTypes: [],
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = (args) => {
  return <SearchIcon {...args} />;
};

export const SearchIconBase = Template.bind({});
export const SearchIconHighlighted = Template.bind({});

SearchIconBase.args = {
  ...mockSearchIconProps.searchIcon,
} as ISvgIcon;

SearchIconHighlighted.args = {
  ...mockSearchIconProps.searchIconHighlighted,
} as ISvgIcon;
