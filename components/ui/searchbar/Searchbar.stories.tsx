import { ComponentMeta, ComponentStory } from '@storybook/react';
import Searchbar from './Searchbar';

export default {
  title: 'ui/Searchbar',
  component: Searchbar,
  argTypes: [],
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = () => {
  return <Searchbar />;
};

export const SearchbarBase = Template.bind({});

SearchbarBase.parameters = {
  controls: { hideNoControlsWarning: true },
};
