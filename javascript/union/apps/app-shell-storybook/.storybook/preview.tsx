import type { Preview } from '@storybook/react';
import '@h4h/app-shell/app-shell.css';
import React from 'react';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // layout: 'fullscreen',
  },

  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: '0' }}>
  //       {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
  //       <Story />
  //     </div>
  //   ),
  // ],

};

export default preview;
