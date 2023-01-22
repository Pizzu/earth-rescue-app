import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductCard, { IProductCard } from './ProductCard';
import { mockProductCardProps } from './ProductCard.mocks';

export default {
  title: 'ui/cards/product/ProductCard',
  component: ProductCard,
  argTypes: [],
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => {
  return (
    <div className="grid grid-cols-4">
      <ProductCard {...args} />
    </div>
  );
};

export const ProductCardBase = Template.bind({});

ProductCardBase.args = {
  ...mockProductCardProps.productCard,
} as IProductCard;
