import { ComponentMeta, ComponentStory } from '@storybook/react';
import Container, { IContainer } from './Container';
import { mockContainerProps } from './Container.mocks';

export default {
  title: 'ui/utils/Container',
  component: Container,
  argTypes: [],
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => {
  return <Container {...args} />;
};

export const ContainerBase = Template.bind({});

ContainerBase.args = {
  ...mockContainerProps.container,
} as IContainer;
