import { Story } from '@storybook/angular/types-6-0';
import { AppTemplateComponent } from './app-template.component';

export default {
  title: 'templates/AppTemplate',
  component: AppTemplateComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<AppTemplateComponent> = (args) => ({
  props: args,
  template: '<star-app-template><h1>Some Title</h1><p>Some Content</p></star-app-template>',
});

export const Example = Template.bind({});

Example.args = {};
