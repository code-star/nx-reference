import { UiModule } from '@star/ui';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { LoadingButtonComponent } from './loading-button.component';

export default {
  title: 'Molecules/LoadingButton',
  component: LoadingButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    }),
  ],
};

const Template: Story<LoadingButtonComponent> = (args) => ({
  props: args,
});

export const Example = Template.bind({ UiModule });

Example.args = {
  label: 'Example Button',
  loading: false
};
