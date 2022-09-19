import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeadingText, { IHeadingText } from './HeadingText';
import { mockHeadingTextProps } from './HeadingText.mocks';

export default {
  title: 'typography/HeadingText',
  component: HeadingText,
  argTypes: [],
} as ComponentMeta<typeof HeadingText>;

const Template: ComponentStory<typeof HeadingText> = (args) => {
  return <HeadingText {...args} />;
};

export const HeadingOne = Template.bind({});
export const HeadingTwo = Template.bind({});
export const HeadingThree = Template.bind({});
export const HeadingFour = Template.bind({});
export const HeadingFive = Template.bind({});
export const HeadingSix = Template.bind({});

HeadingOne.args = {
  ...mockHeadingTextProps.headingOne,
} as IHeadingText;

HeadingTwo.args = {
  ...mockHeadingTextProps.headingTwo,
} as IHeadingText;

HeadingThree.args = {
  ...mockHeadingTextProps.headingThree,
} as IHeadingText;

HeadingFour.args = {
  ...mockHeadingTextProps.headingFour,
} as IHeadingText;

HeadingFive.args = {
  ...mockHeadingTextProps.headingFive,
} as IHeadingText;

HeadingSix.args = {
  ...mockHeadingTextProps.headingSix,
} as IHeadingText;
