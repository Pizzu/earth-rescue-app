import { ComponentMeta, ComponentStory } from '@storybook/react';
import Loader from './Loader';

export default {
  title: 'ui/Loader',
  component: Loader,
  argTypes: [],
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => {
  return <Loader />;
};

export const LoaderBase = Template.bind({});

LoaderBase.parameters = {
  controls: { hideNoControlsWarning: true },
};
