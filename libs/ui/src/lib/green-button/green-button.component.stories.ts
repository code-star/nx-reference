import { Story } from '@storybook/angular/types-6-0';
import { GreenButtonComponent } from './green-button.component';

export default {
  title: 'atoms/GreenButtonComponent',
  component: GreenButtonComponent,
};

const Template: Story<GreenButtonComponent> = (args) => ({
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
//   component: GreenButtonComponent,
//   props: {
//     label: 'SomeLabel',
//   },
// });
