import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ISvgIcon } from '../../../types/icons';
import ReceiptIcon from './ReceiptIcon';
import { mockReceiptIconProps } from './ReceiptIcon.mocks';

export default {
  title: 'icons/ReceiptIcon',
  component: ReceiptIcon,
  argTypes: [],
} as ComponentMeta<typeof ReceiptIcon>;

const Template: ComponentStory<typeof ReceiptIcon> = (args) => {
  return <ReceiptIcon {...args} />;
};

export const ReceiptIconBase = Template.bind({});
export const ReceiptIconHighlighted = Template.bind({});

ReceiptIconBase.args = {
  ...mockReceiptIconProps.receiptIcon,
} as ISvgIcon;

ReceiptIconHighlighted.args = {
  ...mockReceiptIconProps.receiptIconHighlighted,
} as ISvgIcon;
