import type { Meta, StoryObj } from '@storybook/angular';
import { AppTemplate } from './app-template';

const meta: Meta<AppTemplate> = {
  title: 'Templates/AppTemplate',
  component: AppTemplate,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => ({
    props: args,
    template: `<star-app-template [title]="title"><h1>Some Title</h1><p>Some Content</p></star-app-template>`,
  }),
};
export default meta;

type Story = StoryObj<AppTemplate>;

export const Example: Story = {
  args: {
    title: 'Some Application Title',
  },
};
