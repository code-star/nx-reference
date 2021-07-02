import { Story } from '@storybook/angular/types-6-0';
import { PrimaryButtonComponent } from './primary-button.component';

export default {
  title: 'atoms/PrimaryButton',
  component: PrimaryButtonComponent,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
};

const Template: Story<PrimaryButtonComponent> = (args) => ({
  props: args,
});

export const Example = Template.bind({});

Example.args = {
  // primary: true,
  label: 'Primary Button',
};

// export const primary = () => ({
//   moduleMetadata: {
//     imports: [],
//   },
//   component: PrimaryButtonComponent,
//   props: {
//     label: 'SomeLabel',
//   },
// });
