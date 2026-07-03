import type { Meta, StoryObj } from '@storybook/angular';
import { RatesTable } from './rates-table';

const meta: Meta<RatesTable> = {
  title: 'Atoms/RatesTable',
  component: RatesTable,
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    template: `<star-rates-table [rates]="rates"></star-rates-table>`,
  }),
};
export default meta;

type Story = StoryObj<RatesTable>;

export const Example: Story = {
  args: {
    rates: [[24424244442, 242244.014142424]],
  },
};
