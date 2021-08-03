import { UiModule } from '@star/ui';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { IconComponent } from './icon.component';

export default {
  title: 'Atoms/IconComponent',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    }),
  ],
};

const Template: Story<IconComponent> = (args) => ({
  props: args,
  template:
    `<div style="display: flex; background-color: #ddd; gap: 20px; padding: 1rem;">
    <div style="width: 50px;">Loading: <star-icon></star-icon></div>
    <div style="width: 50px;">Home: <star-icon type="home"></star-icon></div>
    <div style="width: 50px;">Code: <star-icon type="code"></star-icon></div>
    <div style="width: 50px;">Star: <star-icon type="star"></star-icon></div>
    </div>`,
});

export const Example = Template.bind({});
