import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '@type/icons';
import NewsIcon from './NewsIcon';
import { mockNewsIconProps } from './NewsIcon.mocks';

export default {
  title: 'icons/NewsIcon',
  component: NewsIcon,
  argTypes: [],
} as ComponentMeta<typeof NewsIcon>;

const Template: ComponentStory<typeof NewsIcon> = (args) => {
  return <NewsIcon {...args} />;
};

export const NewsIconBase = Template.bind({});
export const NewsIconHighlighted = Template.bind({});

NewsIconBase.args = {
  ...mockNewsIconProps.newsIcon,
} as ISvgIcon;

NewsIconHighlighted.args = {
  ...mockNewsIconProps.newsIconHighlighted,
} as ISvgIcon;
