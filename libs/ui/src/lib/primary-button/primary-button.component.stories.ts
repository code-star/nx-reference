import { Story } from '@storybook/angular/types-6-0';
import { PrimaryButtonComponent } from './primary-button.component';

export default {
  title: 'atoms/PrimaryButtonComponent',
  component: PrimaryButtonComponent,
};

const Template: Story<PrimaryButtonComponent> = (args) => ({
  props: args,
});

export const Example = Template.bind({});

Example.args = {
  // primary: true,
  label: 'The Green Button',
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
