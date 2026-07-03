import type { Meta, StoryObj } from '@storybook/angular';
import { PrimaryButton } from './primary-button';

const meta: Meta<PrimaryButton> = {
  title: 'Atoms/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    template: `<star-primary-button [disabled]="disabled">Primary Button</star-primary-button>`,
  }),
};
export default meta;

type Story = StoryObj<PrimaryButton>;

export const Example: Story = {
  args: {
    disabled: false,
  },
};
