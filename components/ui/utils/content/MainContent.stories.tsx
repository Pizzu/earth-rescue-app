import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainContent, { IMainContent } from './MainContent';
import { mockMainContentProps } from './MainContent.mocks';

export default {
  title: 'ui/utils/MainContent',
  component: MainContent,
  argTypes: [],
} as ComponentMeta<typeof MainContent>;

const Template: ComponentStory<typeof MainContent> = (args) => {
  return <MainContent {...args} />;
};

export const MainContentBase = Template.bind({});

MainContentBase.args = {
  ...mockMainContentProps.mainContent,
} as IMainContent;
