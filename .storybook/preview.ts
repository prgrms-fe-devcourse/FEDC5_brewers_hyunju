import type { Preview } from '@storybook/react';
import './../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
    },
  },
};

export default preview;
