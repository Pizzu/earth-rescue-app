import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartNumber, { ICartNumber } from './CartNumber';
import { mockCartNumberProps } from './CartNumber.mock';

export default {
  title: 'ui/cartElements/CartNumber',
  component: CartNumber,
  argTypes: [],
} as ComponentMeta<typeof CartNumber>;

const Template: ComponentStory<typeof CartNumber> = (args) => {
  return <CartNumber {...args} />;
};

export const CartNumberBase = Template.bind({});

CartNumberBase.args = {
  ...mockCartNumberProps.cartNumberBase,
} as ICartNumber;
