import { ComponentMeta, ComponentStory } from '@storybook/react';
import BodyText, { IBodyText } from './BodyText';
import { mockBodyTextProps } from './BodyText.mocks';

export default {
  title: 'typography/BodyText',
  component: BodyText,
  argTypes: [],
} as ComponentMeta<typeof BodyText>;

const Template: ComponentStory<typeof BodyText> = (args) => {
  return <BodyText {...args} />;
};

export const BodyLarge = Template.bind({});
export const BodyDefault = Template.bind({});
export const BodySmall = Template.bind({});

BodyLarge.args = {
  ...mockBodyTextProps.bodyLarge,
} as IBodyText;

BodyDefault.args = {
  ...mockBodyTextProps.bodyDefault,
} as IBodyText;

BodySmall.args = {
  ...mockBodyTextProps.bodySmall,
} as IBodyText;
