import { ComponentMeta, ComponentStory } from '@storybook/react';
import SvgHandler, { ISvgHandler } from './SvgHandler';
import { mockSvgHanlderProps } from './SvgHandler.mocks';

export default {
  title: 'common/SvgHandler',
  component: SvgHandler,
  argTypes: [],
} as ComponentMeta<typeof SvgHandler>;

const Template: ComponentStory<typeof SvgHandler> = (args) => {
  return <SvgHandler {...args} />;
};

export const SvgHandlerBase = Template.bind({});

SvgHandlerBase.args = {
  ...mockSvgHanlderProps.svgHandler,
} as ISvgHandler;
