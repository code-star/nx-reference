import type { StorybookConfig } from '@storybook/angular';

/**
 * Single deployable catalog: aggregates the demo app, the @star/ui component
 * library, and the shared libraries into one Storybook (see ADR-0004).
 */
const config: StorybookConfig = {
  stories: [
    '../src/app/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../libs/ui/src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../libs/shared/**/src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};

export default config;
