import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebar from './Sidebar';

export default {
  title: 'common/Sidebar',
  component: Sidebar,
  argTypes: [],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => {
  return <Sidebar />;
};

export const SidebarBase = Template.bind({});

SidebarBase.parameters = {
  controls: { hideNoControlsWarning: true },
};
