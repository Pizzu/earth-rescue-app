import { ComponentMeta, ComponentStory } from '@storybook/react';
import DisplayText, { IDisplayText } from './DisplayText';
import { mockDisplayTextProps } from './DisplayText.mocks';

export default {
  title: 'typography/DisplayText',
  component: DisplayText,
  argTypes: [],
} as ComponentMeta<typeof DisplayText>;

const Template: ComponentStory<typeof DisplayText> = (args) => {
  return <DisplayText {...args} />;
};

export const DisplayOne = Template.bind({});
export const DisplayTwo = Template.bind({});
export const DisplayThree = Template.bind({});
export const DisplayFour = Template.bind({});

DisplayOne.args = {
  ...mockDisplayTextProps.displayOne,
} as IDisplayText;

DisplayTwo.args = {
  ...mockDisplayTextProps.displayTwo,
} as IDisplayText;

DisplayThree.args = {
  ...mockDisplayTextProps.displayThree,
} as IDisplayText;

DisplayFour.args = {
  ...mockDisplayTextProps.displayFour,
} as IDisplayText;
