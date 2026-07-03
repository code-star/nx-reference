import type { Meta, StoryObj } from '@storybook/angular';
import { LoadingButton } from './loading-button';

const meta: Meta<LoadingButton> = {
  title: 'Molecules/LoadingButton',
  component: LoadingButton,
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    template: `<star-loading-button [loading]="loading">Example Button</star-loading-button>`,
  }),
};
export default meta;

type Story = StoryObj<LoadingButton>;

export const Example: Story = {
  args: {
    loading: false,
  },
};
