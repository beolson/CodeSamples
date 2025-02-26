import type { StorybookConfig } from '@storybook/react-vite';
import { InlineConfig, UserConfig, mergeConfig } from 'vite';
import path, { dirname, join } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  // async viteFinal(config, {configType}) {
  //   const { mergeConfig } = await import('vite');

  //   if (configType === 'DEVELOPMENT') {
  //     // Your development configuration goes here
  //   }
  //   if (configType === 'PRODUCTION') {
  //     // Your production configuration goes here.
  //   }
  //   return mergeConfig(config, {
  //     // Your environment configuration here
  //   });
  // }
  //https://github.com/vitejs/vite/issues/819
  //https://vite.dev/config/server-options.html#server-hmr
  //https://storybook.js.org/docs/builders/vite#component-tests-not-working-as-expected
};
export default config;
