import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { IButton } from './Button';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: [],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const ButtonBase = Template.bind({});

ButtonBase.args = {
  ...mockButtonProps.button,
} as IButton;
