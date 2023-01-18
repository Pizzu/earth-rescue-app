import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo, { ILogo } from './Logo';
import { mockLogoProps } from './Logo.mocks';
export default {
  title: 'ui/Logo',
  component: Logo,
  argTypes: [],
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => {
  return <Logo {...args} />;
};

export const LogoMedium = Template.bind({});
export const LogoSmall = Template.bind({});
export const LogoLarge = Template.bind({});

LogoMedium.args = {
  ...mockLogoProps.logoMedium,
} as ILogo;

LogoSmall.args = {
  ...mockLogoProps.logoSmall,
} as ILogo;

LogoLarge.args = {
  ...mockLogoProps.logoLarge,
} as ILogo;
