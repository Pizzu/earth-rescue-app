import { ComponentMeta, ComponentStory } from '@storybook/react';
import Divider from './Divider';

export default {
  title: 'ui/Divider',
  component: Divider,
  argTypes: [],
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = () => {
  return <Divider />;
};

export const DividerBase = Template.bind({});

DividerBase.parameters = {
  controls: { hideNoControlsWarning: true },
};
