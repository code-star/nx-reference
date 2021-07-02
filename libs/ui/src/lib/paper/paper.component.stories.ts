import { Story } from '@storybook/angular/types-6-0';

import { PaperComponent } from './paper.component';

// export default {
//   title: 'atoms/Paper'
// }

// export const primary = () => ({
//   moduleMetadata: {
//     imports: []
//   },
//   component: PaperComponent,
//   props: {
//   }
// })

export default {
  title: 'atoms/Paper',
  component: PaperComponent,
  // decorators: [

  // ],
  template: 'lakjd',
};

const Template: Story<PaperComponent> = (args) => ({
  props: args,
  template: '<star-paper><h1>Some Title</h1><p>Some Content</p></star-paper>',
});

export const Example = Template.bind({});

Example.args = {
  // template: 'lakjd',
  // content: 'lakjd',
  // children - rates: [[24424244442, 242244.014142424]],
};
