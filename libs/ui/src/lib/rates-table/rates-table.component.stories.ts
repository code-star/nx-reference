import { Story } from '@storybook/angular/types-6-0';
import { RatesTableComponent } from './rates-table.component';

export default {
  title: 'atoms/RatesTable',
  component: RatesTableComponent,
};

const Template: Story<RatesTableComponent> = (args) => ({
  props: args,
});

export const Example = Template.bind({});

Example.args = {
  rates: [[24424244442, 242244.014142424]],
};
