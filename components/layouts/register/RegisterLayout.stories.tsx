import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegisterLayout, { IRegisterLayout } from './RegisterLayout';
import { mockRegisterLayoutProps } from './RegisterLayout.mocks';

export default {
  title: 'layouts/RegisterLayout',
  component: RegisterLayout,
  argTypes: [],
} as ComponentMeta<typeof RegisterLayout>;

const Template: ComponentStory<typeof RegisterLayout> = (args) => {
  return <RegisterLayout {...args} />;
};

export const Base = Template.bind({});

Base.args = {
  ...mockRegisterLayoutProps.base,
} as IRegisterLayout;
