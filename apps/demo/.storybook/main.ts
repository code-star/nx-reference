import type { StorybookConfig } from '@storybook/angular';
import { join } from 'node:path';

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
  // Mirror the `root-package-json` tsconfig path alias for the webpack builder
  // so MDX/story imports of the root package.json resolve during the catalog build.
  webpackFinal: async (webpackConfig) => {
    webpackConfig.resolve ??= {};
    webpackConfig.resolve.alias = {
      ...(webpackConfig.resolve.alias ?? {}),
      'root-package-json': join(process.cwd(), 'package.json'),
    };
    return webpackConfig;
  },
};

export default config;

