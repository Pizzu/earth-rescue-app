import { BodyText, HeadingText } from '@components/typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card, { ICard } from './Card';
import { mockCardProps } from './Card.mocks';

export default {
  title: 'ui/cards/base/Card',
  component: Card,
  argTypes: [],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <Card {...args}>
      <div className="p-8 flex flex-col">
        <HeadingText elementTag="h2" type="text-headingTwo">
          {args.children}
        </HeadingText>
        <BodyText type="text-bodyDefault">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi cupiditate doloremque voluptas illum, consectetur
          consequuntur voluptatum dolorem
        </BodyText>
      </div>
    </Card>
  );
};

export const CardBase = Template.bind({});

CardBase.args = {
  ...mockCardProps.card,
} as ICard;
