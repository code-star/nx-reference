import type { Meta, StoryObj } from '@storybook/angular';
import { Alert } from './alert';

const meta: Meta<Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    template: `<star-alert [item]="item"></star-alert>`,
  }),
};
export default meta;

type Story = StoryObj<Alert>;

export const Example: Story = {
  args: {
    item: {
      message: 'Example error message',
      severity: 'error',
    },
  },
};
