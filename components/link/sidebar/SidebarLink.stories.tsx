import { ComponentMeta, ComponentStory } from '@storybook/react';
import SidebarLink, { ISidebarLink } from './SidebarLink';
import { mockSidebarLinkProps } from './SidebarLink.mocks';

export default {
  title: 'link/SidebarLink',
  component: SidebarLink,
  argTypes: [],
} as ComponentMeta<typeof SidebarLink>;

const Template: ComponentStory<typeof SidebarLink> = (args) => {
  return <SidebarLink {...args} />;
};

export const SidebarLinkBase = Template.bind({});

SidebarLinkBase.args = {
  ...mockSidebarLinkProps.sidebarLink,
} as ISidebarLink;
