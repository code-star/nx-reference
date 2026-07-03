import type { Meta, StoryObj } from '@storybook/angular';
import { Paper } from './paper';

const meta: Meta<Paper> = {
  title: 'Atoms/Paper',
  component: Paper,
  tags: ['autodocs'],
  render: () => ({
    template: `<star-paper><h1>Some Title</h1><p>Some Content</p></star-paper>`,
  }),
};
export default meta;

type Story = StoryObj<Paper>;

export const Example: Story = {};
