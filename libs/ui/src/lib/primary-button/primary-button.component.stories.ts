import { Story } from '@storybook/angular/types-6-0';
import { PrimaryButtonComponent } from './primary-button.component';

export default {
  title: 'atoms/PrimaryButton',
  component: PrimaryButtonComponent,
  // argTypes: {
  //   onClick: {
  //     action: 'clicked',
  //   },
  // },
};

const Template: Story<PrimaryButtonComponent & { label: string }> = ({
  label,
  ...props
}) => ({
  props,
  template: `<star-primary-button>${label}</star-primary-button>`,
});

export const Example = Template.bind({});

Example.args = {
  label: 'Primary Button',
  disabled: false,
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
