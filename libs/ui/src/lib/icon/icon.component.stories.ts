import { Story } from '@storybook/angular/types-6-0';

import { IconComponent } from './icon.component';

export default {
  title: 'Atoms/IconComponent',
  component: IconComponent,
};

const Template: Story<IconComponent> = (args) => ({
  props: args,
  template:
    `<star-icon type="loading"></star-icon>
    <star-icon type="home"></star-icon>
    <star-icon type="code"></star-icon>
    <star-icon type="star"></star-icon>`,
});

export const Example = Template.bind({});
