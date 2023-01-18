import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar, { INavbar } from './Navbar';
import { mockNavbarProps } from './Navbar.mocks';

export default {
  title: 'ui/Navbar',
  component: Navbar,
  argTypes: [],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => {
  return <Navbar {...args} />;
};

export const NavbarBase = Template.bind({});

NavbarBase.args = {
  ...mockNavbarProps.navbarBase,
} as INavbar;
