import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box, { IBox } from './Box';
import { mockBoxProps } from './Box.mocks';

export default {
  title: 'ui/utils/Box',
  component: Box,
  argTypes: [],
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => {
  return <Box {...args} />;
};

export const BoxBase = Template.bind({});

BoxBase.args = {
  ...mockBoxProps.box,
} as IBox;
