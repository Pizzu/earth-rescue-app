import { ComponentMeta, ComponentStory } from '@storybook/react';
import SingleText, { ISingleText } from './SingleText';
import { mockSingleTextProps } from './SingleText.mocks';

export default {
  title: 'typography/SingleText',
  component: SingleText,
  argTypes: [],
} as ComponentMeta<typeof SingleText>;

const Template: ComponentStory<typeof SingleText> = (args) => {
  return <SingleText {...args} />;
};

export const SingleText400 = Template.bind({});
export const SingleText300 = Template.bind({});
export const SingleText200 = Template.bind({});
export const SingleText100 = Template.bind({});
export const SingleText50 = Template.bind({});

SingleText400.args = {
  ...mockSingleTextProps.singleText400,
} as ISingleText;

SingleText300.args = {
  ...mockSingleTextProps.singleText300,
} as ISingleText;

SingleText200.args = {
  ...mockSingleTextProps.singleText200,
} as ISingleText;

SingleText100.args = {
  ...mockSingleTextProps.singleText100,
} as ISingleText;

SingleText50.args = {
  ...mockSingleTextProps.singleText50,
} as ISingleText;
