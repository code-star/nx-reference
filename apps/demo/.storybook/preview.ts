import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';
import { themes } from 'storybook/theming';
import docJson from '../../../documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
  },
  tags: ['autodocs'],
};

export default preview;
