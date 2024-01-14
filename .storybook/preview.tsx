import React from 'react';
import type { Preview } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import '~/index.css';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

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
  decorators: [
    (Story) => (
      <RecoilRoot>
        <MemoryRouter>
          <Routes>
            <Route
              path='/*'
              element={<Story />}
            />
          </Routes>
        </MemoryRouter>
      </RecoilRoot>
    ),
  ],
};

export default preview;
