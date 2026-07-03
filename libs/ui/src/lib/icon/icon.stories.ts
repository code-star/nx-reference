import type { Meta, StoryObj } from '@storybook/angular';
import { Icon } from './icon';

const meta: Meta<Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  render: () => ({
    template: `<div style="display: flex; background-color: #ddd; gap: 20px; padding: 1rem;">
      <div style="width: 50px;">Loading: <star-icon type="loading"></star-icon></div>
      <div style="width: 50px;">Home: <star-icon type="home"></star-icon></div>
      <div style="width: 50px;">Code: <star-icon type="code"></star-icon></div>
      <div style="width: 50px;">Star: <star-icon type="star"></star-icon></div>
    </div>`,
  }),
};
export default meta;

type Story = StoryObj<Icon>;

export const Example: Story = {};
