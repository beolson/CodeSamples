import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { ApplicationLayout } from './index.jsx';

const meta = {
  component: ApplicationLayout,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ApplicationLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('count-button'));
    await userEvent.click(canvas.getByTestId('count-button'));
    await userEvent.click(canvas.getByTestId('count-button'));

    await expect(canvas.getByText('Count 3 Button')).toBeInTheDocument();
  },
} satisfies Story;

// const meta: Meta<typeof MyButton> = {
//   component: MyButton,
// };

// export default meta;
// type Story = StoryObj<typeof MyButton>;

// //👇 Throws a type error if the args don't match the component props
// export const Primary: Story = {
//   args: {
//     label: "true",
//   },
// };
