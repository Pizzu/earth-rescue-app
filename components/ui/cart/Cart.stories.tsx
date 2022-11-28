import { ComponentMeta, ComponentStory } from '@storybook/react';
import Cart from './Cart';

export default {
  title: 'ui/cartElements/Cart',
  component: Cart,
  argTypes: [],
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = () => {
  return <Cart />;
};

export const CartBase = Template.bind({});

CartBase.parameters = {
  controls: { hideNoControlsWarning: true },
};
